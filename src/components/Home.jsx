import React from "react";
import Header from './Header'
import CardPizza from './CardPizza'
import {pizzaCart} from '../assets/js/pizzas.js'

const Home = ( {showCarrito,agregarAlCarrito} ) =>{

    return (
       
        <div>
            <button className="btn btn-primary my-4" onClick={showCarrito}>Ir al carrito</button>
            <Header/>
                <div className="row">
                

                {pizzaCart.map((producto) => (
                    <CardPizza
                        key={producto.id}
                        name={producto.name}
                        price={producto.price}
                        ingredients={producto.ingredients}
                        img={producto.img}
                        agregarAlCarrito={agregarAlCarrito}
                        producto={producto}
                    />
                ))}
                </div>
        </div>  
                );
}

export default Home;