
import React, { useState,useEffect } from "react";



const Pizza = () => {

    const [pizzas, setPizzas] = useState({});

    
    const buscaPizza = async () => {
        const url = 'http://localhost:5000/api/pizzas/p001';
        const response = await fetch(url);
        const data = await response.json();
        setPizzas(data);
    }


    useEffect( () =>{
        buscaPizza();
    },[]);


    return (
        <div className="container">
            <div className="row">
                <div className="offset-3 col-6">
                    <div className="card">
                        {pizzas.img && (
                            <img src={pizzas.img} className="card-img-top mx-auto" alt="Pizza"></img>
                        )}
                        <div className="card-body">
                            <h1>{pizzas.name}</h1>
                            <p><span className="fw-bold">Código: </span>{pizzas.id}</p>
                            <p><span className="fw-bold">Descripción: </span>{pizzas.desc}</p>
                            <p><span className="fw-bold">Ingredientes: </span></p>
                            <ul>
                                {Array.isArray(pizzas.ingredients) ? (
                                    pizzas.ingredients.map((ingredient, index) => (
                                        <li key={index}>{ingredient}</li>
                                    ))
                                ) : (
                                    <li>No se especifican ingredientes</li>
                                )}
                            </ul>
                            <p><span className="fw-bold">Precio: </span>$ {pizzas.price}</p>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Pizza;