import React, { useContext }from "react";
import LoginTrue from './navegacion/LoginTrue';
import LoginFalse from './navegacion/LoginFalse';
import { Link } from 'react-router-dom'
import { CarritoContext } from '../context/CarritoContext';
import { UserContext }  from "../context/UserContext";

const Nabvar = ({carrito}) =>{
    const { total } = useContext(CarritoContext);
    let total_formateado = total.toLocaleString("es-CL");
    
    const {user} = useContext(UserContext)
    const token = user
    
    return (
        <div>
            
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Pizzería Mamma Mia</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                {token ? <LoginTrue total={total_formateado}/> : <LoginFalse total={total_formateado}/>}
            </div>
            </nav>
        </div>
    );
}

export default Nabvar;