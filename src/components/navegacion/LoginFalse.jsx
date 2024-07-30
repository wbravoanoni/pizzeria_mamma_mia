import React from "react";

const LoginFalse = (props) => {
    return(
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Login</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Register</a>
                </li>
            </ul>
        <div className="d-flex" role="search">
            <span className="text-white">Total: ${props.total}</span>
        </div>
    </div>
    );
}

export default LoginFalse;