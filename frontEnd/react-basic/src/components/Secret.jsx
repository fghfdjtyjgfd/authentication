import React, {useEffect} from "react";
import "../style/Secret.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Secret() {

    const navigate = new useNavigate();
    axios.defaults.withCredentials = true;
    useEffect(() => {
        axios.get("http://localhost:8080/secret")
        .then(res => {
        if (res.data.Status === "Secret Success") {
            console.log("success");
        } else {
            navigate("/login");
            console.log("need login");
        }
        })
        .then(err => console.log(err))
    })

    function handleDelete() {
    axios.get("http://localhost:8080/logout")
    .then(res => {
      navigate("/")
    })
    .catch(err => console.log(err))
    }

    return (
        <>
            <div className="secret-container">
                <div className="secret-frame">
                    <h1 className="secret-title">Secret</h1>
                    <p>Login successful</p>
                    <div className="secret-btn">
                        <Link to="/" className="btn">Home</Link>
                        <button className="btn" type="submit" onClick={handleDelete}>Logout</button>
                    </div>
                </div>
                
                
            </div>
        </>
    )
}



export default Secret;