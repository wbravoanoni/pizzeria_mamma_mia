import React, { useState } from 'react';


const RegisterPage = () =>{

    const [email,setEmail] = useState('');
    const [password1,setPassword1] = useState('');
    const [password2,setPassword2] = useState('');
    const [error,setError] = useState(false);
    const [exito,setExito] = useState(false);
    const [errorMensaje,setErrorMensaje] = useState('');

    const validarFormulario = (e) => {
        e.preventDefault();

        if(email === '' || password1 === '' || password2 === '') {
            setError(true);
            setErrorMensaje('Todos los campos son obligatorios');
            setEstiloAlerta('alert-danger');
            return;
        }

        if( password1.length <5){
            setError(true);
            setErrorMensaje('La contraseña debe tener minimo 6 carácteres');
            setEstiloAlerta('alert-danger');
            return;
        }

        if( password1 !== password2  ){
            setError(true);
            setErrorMensaje('La contraseña debe ser iguales');
            setEstiloAlerta('alert-danger');
            return;
        }

        setError(false);
        setErrorMensaje('');
        setExito(true);
        setEmail('');
        setPassword1('');
        setPassword2('');
    }

    return(
        <form className="formulario" onSubmit={validarFormulario}>
            <h1 class="my-4">Register Page</h1>
            <div className="form-control">
                <label className="form-label" htmlFor="email">Email:</label>
                <input className="form-control" type="email" name="email" id="email" placeholder="Enter your email" onChange={ (e)=>setEmail(e.target.value) } value={email}/>
            </div>
            <div className="form-control">
                <label className="form-label" htmlFor="password">Contraseña</label>
                <input className="form-control" name="password" id="password" type="password" onChange={ (e)=>setPassword1(e.target.value) } value={password1}/>
            </div>
            <div className="form-control">
                <label className="form-label" htmlFor="password2">Repita la Contraseña</label>
                <input className="form-control" name="password2" id="password2" type="password" onChange={ (e)=>setPassword2(e.target.value) } value={password2} />
            </div>
            <button className="btn btn-dark mt-2" type="submit">Enviar</button>

            {error ? <div class="alert alert-danger mt-3" role="alert">{errorMensaje}</div> : null}
            {exito ? <div class="alert alert-success mt-3" role="alert">Registro creado correctamente</div> : null}
        </form>
        
        );
};

export default RegisterPage;