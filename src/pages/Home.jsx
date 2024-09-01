import React, { useState,useEffect } from "react";
import Header from '../components/Header'
import CardPizza from '../components/CardPizza'
//import {pizzaCart} from '../assets/js/pizzas.js'

const Home = ( {showCarrito,agregarAlCarrito} ) =>{

    const [productos,setProductos] = useState([]);

    const url = "http://localhost:5000/api/pizzas";

    const getData = async() => {
        const response = await fetch(url);
        const data = await response.json();
        setProductos(data);
    }
    
    useEffect( ()=>{
        getData();
    }, [] );

    return (
       
        <div>
            <button className="btn btn-primary my-4" onClick={showCarrito}>Ir al carrito</button>
            <Header/>
                <div className="row">

                {productos.map((producto) => (
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