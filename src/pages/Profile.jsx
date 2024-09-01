import React, { useState,useEffect } from "react";

const Profile = () =>{
    return (
            <div className="row my-5">
                <div className="offset-3 col-6">
                    <h1>Profile</h1>
                    <label htmlFor="">Email</label>
                    <input className="form-control" type="text" value="ejemplo@mail.cl" />
                    <button className="btn btn-danger my-5">Cerrar Sesión</button>
                </div>
                
            </div>
        );
}

export default Profile;