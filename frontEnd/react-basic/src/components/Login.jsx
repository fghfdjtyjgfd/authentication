import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import '../style/Register.css'

function Login() {
    const [value, setValue] = useState({
        email:"",
        password:""
    })

    const navigate = useNavigate();
    axios.defaults.withCredentials = true;
    function handleSubmit(event) {
        event.preventDefault();
        axios.post("http://localhost:8080/login", value)
        .then(res => {
            if (res.data.Status === "Success") {
                navigate("/")
            } else {
                alert(res.data.Error)
            }
        })
        .then(err => console.log(err));
    }
    return (
        <div>
            <div className='container'>
                <div className="title">
                    <h1>Login</h1>
                </div>

                <form className="all_input" onSubmit={handleSubmit}>
                    <div className='input'>
                        <label htmlFor="">Email</label>
                        <input name='email' type="text" placeholder='email' onChange={(e) => {setValue({...value, email: e.target.value})}}/>
                    </div>
                    <div className='input'>
                        <label htmlFor="">Password</label>
                        <input name='password' type="password" placeholder='password'onChange={(e) => {setValue({...value, password: e.target.value})}}/>
                    </div>
                
                    <div className="forgot_password">Forgot password? <span>Click Here</span></div>
                    <div className="submit_container">
                        <Link to="/register" className="submit">SignUp</Link>
                        <button type='submit' className="submit">Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;