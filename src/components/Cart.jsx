import React from "react";


const Cart = ({showHome,carrito,aumentarCantidad,disminuirCantidad})=>{

    const totalGeneral = carrito.reduce((acc, producto) => acc + producto.price * producto.cant, 0);

    return(
        <div>
            <button className="btn btn-primary my-4" onClick={showHome}>Ir al Home</button>
            <div className="row">
                <h1 className="text-center mb-4">Carrito</h1>
                    {carrito.map((producto) => (
                    <ul>
                        {producto.img ? (<li className="list-unstyled"><img src={producto.img} alt="" width={200}/></li>):(null) }  
                        {producto.name ? (<li className="list-unstyled">Pizza {producto.name}</li>) : (null) } 
                        {producto.price ? (<li className="list-unstyled">$ {producto.price * producto.cant }</li>) : (null) }  
                        {producto.cant ? (<li className="list-unstyled">Cantidad: {producto.cant}</li>) : (null) } 
                        {producto.name ? (<li onClick={ () => aumentarCantidad(producto) } className="list-unstyled btn btn-success mx-2">Agregar</li>) : (null) }  
                        {producto.name ? (<li onClick={ () => disminuirCantidad(producto) } className="list-unstyled btn btn-danger">Eliminar</li>) : (null) } 
                
                    </ul>
                    


                    ))}

                <h3>Total a pagar: ${totalGeneral.toFixed(0)}</h3>

            </div>
    </div>  
    )
}

export default Cart;