import React, { useState,useEffect,useContext } from "react";
import Header from '../components/Header'
import CardPizza from '../components/CardPizza'
//import {pizzaCart} from '../assets/js/pizzas.js'
import { ApiContext } from '../context/ApiContext'

const Home = ( ) =>{
    const {productos} = useContext(ApiContext)

    return (
       
        <div>
            <Header/>
                <div className="row">
                {productos.map((producto) => (
                    <CardPizza
                        key={producto.id}
                        name={producto.name}
                        price={producto.price}
                        ingredients={producto.ingredients}
                        img={producto.img}
                        producto={producto}
                        id={producto.id}
                    />
                ))}
                </div>
        </div>  
                );
}

export default Home;