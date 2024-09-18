
import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom"

const Pizza = () => {
    const [pizza, setPizza] = useState([])
    const {id} = useParams()

    const url = `http://localhost:5000/api/pizzas/${id}`;
    const getData = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setPizza(data);
    };
    useEffect(() => {
        getData();
    }, []);
    
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