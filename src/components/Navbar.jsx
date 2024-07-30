import React from "react";
import LoginTrue from './navegacion/LoginTrue';
import LoginFalse from './navegacion/LoginFalse';

const Nabvar = () =>{
    const total = 25000;
    let total_formateado = total.toLocaleString("es-CL");
    const token = true;
    
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