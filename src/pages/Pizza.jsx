
import React, { useState,useEffect,useContext } from "react";
import { ApiContextPizza } from '../context/ApiContextPizza'



const Pizza = () => {
    const {pizza} = useContext(ApiContextPizza)


    return (
        <div className="container">
            <div className="row">
                <div className="offset-3 col-6">
                    <div className="card">
                        {pizza.img && (
                            <img src={pizza.img} className="card-img-top mx-auto" alt="Pizza"></img>
                        )}
                        <div className="card-body">
                            <h1>{pizza.name}</h1>
                            <p><span className="fw-bold">Código: </span>{pizza.id}</p>
                            <p><span className="fw-bold">Descripción: </span>{pizza.desc}</p>
                            <p><span className="fw-bold">Ingredientes: </span></p>
                            <ul>
                                {Array.isArray(pizza.ingredients) ? (
                                    pizza.ingredients.map((ingredient, index) => (
                                        <li key={index}>{ingredient}</li>
                                    ))
                                ) : (
                                    <li>No se especifican ingredientes</li>
                                )}
                            </ul>
                            <p><span className="fw-bold">Precio: </span>$ {pizza.price}</p>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Pizza;