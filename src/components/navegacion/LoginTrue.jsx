import React from "react";
import { Link } from 'react-router-dom'

const LoginTrue = (props) => {
    return(
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link to='/' className="nav-link active"><i className="fa-solid fa-house-chimney-user me-2"></i>Home</Link>     
                </li>
                <li className="nav-item">
                    <Link to='/profile' className="nav-link">Profile</Link>     
                </li>
                <li className="nav-item">
                    <Link to='/' className="nav-link">Logout</Link>   
                </li>
            </ul>
            <div className="d-flex" role="search">
                <span className="text-white"><i className="fa-regular fa-money-bill-1 me-2"></i>Total: ${props.total}</span>
            </div>
        </div>
    );
}

export default LoginTrue;