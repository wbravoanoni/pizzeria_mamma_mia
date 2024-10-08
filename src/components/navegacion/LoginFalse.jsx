import React from "react";
import { Link, NavLink } from 'react-router-dom'
import '../../../src/App.css';

const LoginFalse = (props) => {

    const  setActiveClass = ({ isActive }) => (isActive ? "active" : "default");

    return(
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <NavLink className={ setActiveClass } to="/">
                    Home
                </NavLink>
                {" - "}
                <NavLink className={ setActiveClass } to="/login">
                    Login
                </NavLink>
                {" - "}
                <NavLink className={ setActiveClass } to="/register">
                    Register
                </NavLink>
            </ul>
            
            <div className="d-flex" role="search">
                <Link to='/cart' className="text-white nav-link px-3"><i className="fa-solid fa-cart-shopping mx-2" aria-hidden="true"><span className="text-white mx-2">Total: ${props.total}</span></i></Link>    
            </div>
    </div>
    );
}

export default LoginFalse;