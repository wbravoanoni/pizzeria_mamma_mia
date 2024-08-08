import React, { useState } from "react";

const LoginPage = () =>{

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState(false);
    const [errorMensaje,setErrorMensaje] = useState('');

    const contrasenaCorrecta = 123456;

    const validarIngreso = (e) => {
        e.preventDefault();

        if(email === '' || password === '') {
            setError(true);
            setErrorMensaje('Todos los campos son obligatorios');
            return;
        }

        if( password.length <5){
            setError(true);
            setErrorMensaje('La contraseña debe tener minimo 6 carácteres');
            return;
        }

        if( contrasenaCorrecta != password ){
            setError(true);
            setErrorMensaje('La contraseña no es correcta');
            return;
        }

        setError(false);
        setEmail('');
        setPassword('');
        alert("Ingresando a la plataforma...");
        

    }

    return (
        <form className="formulario" onSubmit={validarIngreso}>
            <h1>Login Page</h1>
            <div className="form-control">
                <label className="form-label" htmlFor="email">Email</label>
                <input id="email" name="email" className="form-control" type="email" onChange={ (e)=> setEmail(e.target.value) } value={email}/>
            </div>

            <div className="form-control">
                <label className="form-label" htmlFor="password">Contraseña</label>
                <input id="password" name="password" className="form-control" type="password" onChange={ (e) => setPassword(e.target.value) } value={password}/>
            </div>

            <button className="btn btn-dark mt-4" type="submit">Ingresar</button>

            {error ? <div class="alert alert-danger mt-3" role="alert">{errorMensaje}</div> : null}

        </form>
    );
}

export default LoginPage;