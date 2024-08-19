import React from "react";

const LoginTrue = (props) => {
    return(
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#"><i className="fa-solid fa-house-chimney-user me-2"></i>Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#"><i className="fa-regular fa-user me-2"></i>Profile</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#"><i className="fa-solid fa-right-from-bracket me-2"></i>Logout</a>
                </li>
            </ul>
            <div className="d-flex" role="search">
                <span className="text-white"><i className="fa-regular fa-money-bill-1 me-2"></i>Total: ${props.total}</span>
            </div>
        </div>
    );
}

export default LoginTrue;