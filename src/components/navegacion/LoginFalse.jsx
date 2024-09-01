import React from "react";
import { Link } from 'react-router-dom'


const LoginFalse = (props) => {
    return(
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link to='/' className="nav-link">Home</Link>       
                </li>
                <li className="nav-item">
                    <Link to='/login' className="nav-link">Login</Link>       
                </li>
                <li className="nav-item">
                    <Link to='/register' className="nav-link">Register</Link>       
                </li>
            </ul>
        <div className="d-flex" role="search">
            <Link to='/cart' className="text-white nav-link px-3"><i class="fa-solid fa-cart-shopping mx-2" aria-hidden="true"><span className="text-white mx-2">Total: ${props.total}</span></i></Link> 
            
            
        </div>
    </div>
    );
}

export default LoginFalse;