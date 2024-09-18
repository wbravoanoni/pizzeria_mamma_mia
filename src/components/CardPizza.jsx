
import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";
import { useNavigate } from "react-router-dom";

const CardPizza = (props) => {

    const { agregarAlCarrito } = useContext(CarritoContext);

    const navigate = useNavigate();

    const irAPizza = (id) => {
        navigate(`/pizza/${id}`);
    };

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

                        <button className="btn btn-outline-secondary mx-2 px-3" onClick={ () => irAPizza(props.id) }><i className="fa-regular fa-eye me-2"></i>Ver más</button>
                        <button onClick={ () => agregarAlCarrito(props.producto) } className="btn btn-outline-dark mx-2 px-3"><i className="fa-solid fa-cart-shopping me-2"></i>Añadir</button>

                    </div>
                </div>
            </div>
    )
};

export default CardPizza;