import React from 'react';
import {Link} from 'react-router-dom';
import style from "../style/Home.module.css"


function Home() {
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