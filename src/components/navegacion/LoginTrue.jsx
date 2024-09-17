import React from "react";
import { Link, NavLink } from 'react-router-dom'
import '../../../src/App.css';

const LoginTrue = (props) => {

    const  setActiveClass = ({ isActive }) => (isActive ? "active" : "default");

    return(
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <NavLink className={ setActiveClass } to="/">
                    Home
                </NavLink>
                {" - "}
                <NavLink className={ setActiveClass } to="/profile">
                    Login
                </NavLink>
                {" - "}
                <NavLink className={ setActiveClass } to="logout">
                Logout
                </NavLink>
            </ul>
            <div className="d-flex" role="search">
                <span className="text-white"><i className="fa-regular fa-money-bill-1 me-2"></i>Total: ${props.total}</span>
            </div>
        </div>
    );
}

export default LoginTrue;