import React from "react";

const CardPizza = (props) => {

    let precio_formateado = props.price.toLocaleString("es-CL");
    let ingredientes =  props.ingredients;
    let ingredientesOrdenados = ingredientes.join(", ");
    return(
            <div className="col-4">
                <div className="card">
                    <img src={props.img} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title fw-bold fs-3">Pizza {props.name}</h5>
                        <hr />
                        <p className="card-text h6">Ingredientes:</p>
                        <p className=""><img src="https://cdn3.iconfinder.com/data/icons/food-1272/64/pizza-512.png" width='20px' alt="" /> {ingredientesOrdenados}</p>
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