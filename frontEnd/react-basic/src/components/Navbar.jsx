import React from 'react';
import { Link } from 'react-router-dom';
import style from '../style/Navbar.module.css'

function Navbar() {
    return (
        <nav className={style.navbar}>
            <div className={style.menu}>
                <Link className={style.textMenu} to="/">Home</Link>
                <Link className={style.textMenu} to="/login">Login</Link>
                <Link className={style.textMenu} to="/register">Register</Link>
                <Link className={style.textMenu} to="/about">About</Link>
            </div>
        </nav>
    )
}

export default Navbar;