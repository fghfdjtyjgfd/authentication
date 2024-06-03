import React, {useState} from 'react';
import '../style/Register.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Register() {
    const [value, setValue] = useState({
        name:"",
        email:"",
        password:""
    })

    const navigate = useNavigate();
    function handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:8080/register', value)
        .then(res => {
            if (res.data.Status === "Success") {
                navigate('/login')
            } else {
                alert("Error")
            }
        })
        .then(err => console.log(err))
    }

    return (
        <div>
            <div className='container'>
                <div className="title">
                    <h1>SignUp</h1>
                </div>

                <form className="all_input" onSubmit={handleSubmit}>
                    <div className='input'>
                        <label htmlFor="">Username</label>
                        <input name="name" type="text" placeholder='name' onChange={(e) => {setValue({...value, name: e.target.value})}}/>
                    </div>
                    <div className='input'>
                        <label htmlFor="">Email</label>
                        <input name='email' type="text" placeholder='email' onChange={(e) => {setValue({...value, email: e.target.value})}}/>
                    </div>
                    <div className='input'>
                        <label htmlFor="">Password</label>
                        <input name='password' type="password" placeholder='password' onChange={(e) => {setValue({...value, password: e.target.value})}}/>
                    </div>

                    <div className="forgot_password">Forgot password? <span>Click Here</span></div>
                    <div className="submit_container">
                        <button type='submit' className="submit">SignUp</button>
                        <Link to="/login" className="submit">Login</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register;