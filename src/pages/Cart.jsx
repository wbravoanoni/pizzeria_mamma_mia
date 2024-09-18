import React from "react";


import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";

import { UserContext }  from "../context/UserContext";



const Cart = ()=>{

    const { user,setUser } = useContext(UserContext);

    const {
        carrito,
        eliminarDelCarrito,
        aumentarCantidad,
        disminuirCantidad,
        total,
      } = useContext(CarritoContext);

      let total_formateado = total.toLocaleString("es-CL");

    //const totalGeneral = carrito.reduce((acc, producto) => acc + producto.price * producto.cant, 0);

    return(
        <div>
            <div className="row">
                <h1 className="text-center mb-4">Carrito</h1>

                {carrito.length === 0 ? (
                    <p>El carrito está vacío</p>
                ) : (
                    carrito.map((producto) => (
                        <div>                     
                            <ul key={producto.img}>
                                {producto.img ? (<li className="list-unstyled"><img src={producto.img} alt="" width={200}/></li>):(null) }  
                                {producto.name ? (<li className="list-unstyled">Pizza {producto.name}</li>) : (null) } 
                                {producto.price ? (<li className="list-unstyled">$ { (producto.price * producto.cant).toLocaleString("es-CL") }</li>) : (null) }  
                                {producto.cant ? (<li className="list-unstyled">Cantidad: {producto.cant}</li>) : (null) } 
                                {producto.name ? (<li onClick={ () => aumentarCantidad(producto) } className="list-unstyled btn btn-success mx-2">Agregar</li>) : (null) }  
                                {producto.name ? (<li onClick={ () => disminuirCantidad(producto) } className="list-unstyled btn btn-danger">Eliminar</li>) : (null) } 
                        
                            </ul>
                            <p className="d-block mx-auto">Total: ${total_formateado}</p>

                            {(user ? <button className="btn btn-warning px-5 mt-5 d-block mx-auto">Pagar</button> : null)}

                            

                            
                        </div>
                    ))
                )}
            </div>
        </div>  
    )
}

export default Cart;