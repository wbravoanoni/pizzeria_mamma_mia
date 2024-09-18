import { useState, useContext,useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom'
import '../../../src/App.css';
import { UserContext }  from "../../context/UserContext";
import { useNavigate } from 'react-router-dom';

const LoginTrue = (props) => {

    const { user,setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const  setActiveClass = ({ isActive }) => (isActive ? "active" : "default");

    const logout = () => {
        setUser(false);
    };

    useEffect(() => {
        console.log('Estado del usuario:', user);
        if (user === false) {
            navigate('/login');
        }
    }, [user, navigate]);

    return(
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <NavLink className={ setActiveClass } to="/">
                    Home
                </NavLink>
                {" - "}
                <NavLink className={ setActiveClass } to="/profile">
                    Profile
                </NavLink>
                {" - "}
                <NavLink className="default" to="/" onClick={logout}>
                Logout
                </NavLink>
            </ul>
            <div className="d-flex" role="search">
                <Link to='/cart' className="text-white nav-link px-3"><i className="fa-solid fa-cart-shopping mx-2" aria-hidden="true"><span className="text-white mx-2">Total: ${props.total}</span></i></Link>    
            </div>
        </div>
    );
}

export default LoginTrue;