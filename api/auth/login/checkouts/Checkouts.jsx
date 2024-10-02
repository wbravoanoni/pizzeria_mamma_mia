import React, { useContext, useState } from "react";
import { CarritoContext } from "../context/CarritoContext";
import { UserContext } from "../context/UserContext";

const Cart = () => {
  const { user } = useContext(UserContext);
  const {
    carrito,
    eliminarDelCarrito,
    aumentarCantidad,
    disminuirCantidad,
    total,
  } = useContext(CarritoContext);

  const [successMessage, setSuccessMessage] = useState(""); // Estado para mostrar mensaje de éxito

  let total_formateado = total.toLocaleString("es-CL");

  const handleCheckout = async () => {
    try {
      const response = await fetch("/api/checkouts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          userId: user?.id, 
          products: carrito.map((producto) => ({
            id: producto.id,
            name: producto.name,
            price: producto.price,
            quantity: producto.cant,
          })),
          total: total, // Monto total del carrito
        }),
      });

      if (!response.ok) {
        throw new Error("Error en la solicitud de checkout");
      }

      const data = await response.json();

      // Mostrar mensaje de éxito
      setSuccessMessage("¡Compra realizada con éxito!");

      // Vaciar el carrito o realizar otras acciones necesarias aquí
    } catch (error) {
        console.error("Error durante el checkout:", error);
        alert("Hubo un problema al realizar la compra. Inténtalo nuevamente.");
    }
  };

  return (
    <div>
      <div className="row">
        <h1 className="text-center mb-4">Carrito</h1>

        {carrito.length === 0 ? (
          <p>El carrito está vacío</p>
        ) : (
          carrito.map((producto) => (
            <div key={producto.id}>
              <ul>
                {producto.img && (
                  <li className="list-unstyled">
                    <img src={producto.img} alt="" width={200} />
                  </li>
                )}
                {producto.name && (
                  <li className="list-unstyled">Pizza {producto.name}</li>
                )}
                {producto.price && (
                  <li className="list-unstyled">
                    $ {(producto.price * producto.cant).toLocaleString("es-CL")}
                  </li>
                )}
                {producto.cant && (
                  <li className="list-unstyled">Cantidad: {producto.cant}</li>
                )}
                {producto.name && (
                  <li
                    onClick={() => aumentarCantidad(producto)}
                    className="list-unstyled btn btn-success mx-2"
                  >
                    Agregar
                  </li>
                )}
                {producto.name && (
                  <li
                    onClick={() => disminuirCantidad(producto)}
                    className="list-unstyled btn btn-danger"
                  >
                    Eliminar
                  </li>
                )}
              </ul>
            </div>
          ))
        )}

        <p className="d-block mx-auto">Total: ${total_formateado}</p>
        {user && (
            <button
                onClick={handleCheckout}
                className="btn btn-warning px-5 mt-5 d-block mx-auto"
            >
            Pagar
            </button>
        )}

        {successMessage && <p className="text-success">{successMessage}</p>}
        </div>
    </div>
    );
};

export default Cart;
