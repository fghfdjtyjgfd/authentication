import React, { useEffect, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';


function Home() {
  const [auth, setAuth] = useState(false)
  const [msg, setMsg] = useState("")

  const navigate = useNavigate();
  useEffect(() => {
    axios.get("http://localhost:8080")
    .then(res => {
      if (res.data.Status === "Success") {
        setAuth(true)
        // navigate("/")
      } else {
        setAuth(false)
        setMsg(res.data.Error)
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
    <div>
        { auth ?
          <div>
            <h1>You are authorized</h1>
            <button type='submit' className="submit" onClick={handleDelete}>Logout</button>
          </div>
          :
          <div>
            <h1>{msg}</h1>
            <Link to="/login">Login</Link>
            <Link to="/register">SignUp</Link>
          </div>
        }
    </div>
  );
}

export default Home;