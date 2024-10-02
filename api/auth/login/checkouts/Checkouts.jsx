import React, { useState, useEffect } from 'react';

const Checkout = () => {
    const [carrito, setCarrito] = useState([]);

    // Supongamos que el carrito se almacena en localStorage o viene de otro componente
    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCarrito(storedCart);
    }, []);

    // Función para enviar el carrito al backend
    const enviarCarrito = async () => {
        try {
            // Obtener el token JWT desde localStorage, si es necesario
            const token = localStorage.getItem("token_jwt");

            // Verifica si tienes productos en el carrito
            if (carrito.length === 0) {
                console.log("El carrito está vacío");
                return;
            }

            const response = await fetch("http://localhost:5000/api/checkout", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`, // Enviar el token JWT
                },
                body: JSON.stringify({
                    cart: carrito, // Enviar el carrito al backend
                }),
            });

            if (!response.ok) {
                throw new Error("Error en la solicitud de checkout");
            }

            const data = await response.json();
            console.log("Respuesta del backend:", data);

            // Si la respuesta es exitosa, podrías limpiar el carrito
            localStorage.removeItem("cart");
            setCarrito([]); // Limpiar el estado del carrito
            alert("Carrito enviado con éxito");
        } catch (error) {
            console.error("Error al enviar el carrito:", error);
            alert("Hubo un error al procesar el checkout.");
        }
    };

    return (
        <div>
            <h1>Checkout</h1>
            {/* Muestra el contenido del carrito */}
            <ul>
                {carrito.map((item, index) => (
                    <li key={index}>
                        {item.name} - {item.quantity} unidades - ${item.price}
                    </li>
                ))}
            </ul>

            {/* Botón para enviar el carrito al backend */}
            <button onClick={enviarCarrito}>Enviar Carrito al Backend</button>
        </div>
    );
};

export default Checkout;
