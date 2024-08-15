import React from "react";
import Header from './Header'
import CardPizza from './CardPizza'
import {pizzaCart} from '../assets/js/pizzas.js'

const Home = () =>{

    return (
        <div>
            <Header/>
                <div class="row">
                

                {pizzaCart.map((tarea) => (
                    <CardPizza
                        key={tarea.id}
                        name={tarea.name}
                        price={tarea.price}
                        ingredients={tarea.ingredients}
                        img={tarea.img}
                    />
                ))}
                </div>
        </div>  
                );
}

export default Home;