import React, { useEffect, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import style from "../style/Home.module.css"


function Home() {
  // const [msg, setMsg] = useState("")

  // const navigate = useNavigate();
  // useEffect(() => {
  //   axios.get("http://localhost:8080")
  //   .then(res => {
  //     if (res.data.Status === "Success") {
  //       setAuth(true)
  //       navigate("/")
  //     } else {
  //       setAuth(false)
  //       setMsg(res.data.Error)
  //     }
  //   })
  //   .then(err => console.log(err))
  // })

  // function handleDelete() {
  //   axios.get("http://localhost:8080/logout")
  //   .then(res => {
  //     navigate("/")
  //   })
  //   .catch(err => console.log(err))
  // }

  return (
    <div>
          <div className={style.container}>
            <h1>Home page</h1>
            <div className={style.btn}>
              <Link to="/login" className={style.submit}>Login</Link>
              <Link to="/register" className={style.submit}>SignUp</Link>
            </div>
          </div>

    </div>
  );
}

export default Home;