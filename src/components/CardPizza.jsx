import React from "react";

const CardPizza = (props) => {

    let precio_formateado = props.price.toLocaleString("es-CL");

    return(
            <div className="col-4">
                <div className="card">
                    <img src={props.img} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title fw-bold fs-3">Pizza {props.name}</h5>
                        <hr />
                        <p className="card-text h6">Ingredientes:</p>
                        <ul>
                        {props.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                        </ul>
                        <hr />
                        <p className="fw-bold fs-4">Precio: <span>${precio_formateado}</span></p>
                        
                        <a href="#" className="btn btn-outline-secondary mx-2 px-3"><i class="fa-regular fa-eye me-2"></i>Ver más</a>    
                        <a href="#" className="btn btn-outline-dark mx-2 px-3"><i class="fa-solid fa-cart-shopping me-2"></i>Añadir</a>
                    </div>
                </div>
            </div>
    )
};

export default CardPizza;