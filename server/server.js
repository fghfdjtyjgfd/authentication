import express from "express";
import mysql from "mysql";
import pg from 'pg';
import cors from "cors";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import cookieParser from "cookie-parser";
const salt = 10;

const app = express();
app.use(express.json());
app.use(cors({
    origin:["http://localhost:3000"],
    methods:["POST", "GET"],
    credentials: true
}));
app.use(cookieParser());

const db = new pg.Client({
    host:"localhost",
    user:"postgres",
    password:"123",
    database:"test",
    port:5432
})
db.connect();

const verifyUser = (req, res, next) => {
    const token = req.cookies.token
    if (token == null) {
        return res.json({Error: "You are not authorized"})
    } else {
        jwt.verify(token, "jwt-secret-key", (err, decoded) => {
            if (err) {
                return res.json({Error: "Token is invalid"})
            } else {
                req.name = decoded.name;
                next();
            }
        })
    }
}

app.get("/", (req,res) => {
    return res.json({Status: "Success"})
})

app.get("/secret", verifyUser, (req,res) => {
    return res.json({Status: "Secret Success"})
})

app.post("/register", (req,res) => {
    try {
        bcrypt.hash(req.body.password.toString(), salt, async (err, hash) => {
            if (err) {
                return res.json({Error: "Hashing password error"});
            } else {
                db.query(
                    "INSERT INTO login (name, email, password) VALUES ($1, $2, $3)",
                    [req.body.name, req.body.email, hash],
                    (err, response) => {
                        if(err) res.json({Error: "Duplicate email"})
                        return res.json({Status: "Success"})
                    }
                )
            }
        })
    } catch (err) {
        console.log(err);
    }
})

app.post("/login", async(req,res) => {
    // const name = req.body.email
    try {
        const result = await db.query("SELECT * FROM login WHERE email = $1", [req.body.email])
        if (result.rows.length > 0) {
            const user = result.rows[0]
            const storedHashPassword = user.password
            bcrypt.compare(req.body.password.toString(), storedHashPassword, (err, response) => {
                if(err) return res.json({Error: "Comparing password error"})
                if (response) {
                    const name = result.rows[0].name
                    const token = jwt.sign({name}, "jwt-secret-key", {expiresIn: '1h'})
                    res.cookie('token', token);
                    return res.json({Status: "Success"})
                } else {
                    return res.json({Error: "Invalid password"})
                }
            })
        } else {
            return res.json({Error: "User doesn't exist"})
        }
        
    } catch (err) {
        console.log(err);
    }
})

app.get("/logout", (req,res) => {
    res.clearCookie('token');
    return res.json({Status: "Success"});
})

app.listen(8080, () => {
    console.log("start at port 8080");
})
