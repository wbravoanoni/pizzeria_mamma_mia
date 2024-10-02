import { createContext, useEffect, useState } from "react";

export const CarritoContext = createContext();

const CarritoProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);

    const vaciarCarrito = () => {
      setCarrito([]);
      setTotal(0);
    };

    const agregarAlCarrito = (producto) => {
        //verificar si el producto ya esta en el carrito
        const itemEnCarrito = carrito.find((item) => item.id === producto.id);
        //si ya esta, vamos a disminuir o aumentar la cantidad
        if (itemEnCarrito) {
            setCarrito(
            carrito.map(item =>
                item.id === producto.id
                    ? { ...item, cant: item.cant + 1 }
                    : item
            )
        );
          //sino agregamos al carrito una propiedad cant: 1
        } else {
            setCarrito([...carrito, { ...producto, cant: 1 }]);
        }
    };



    const eliminarDelCarrito = (id) => {
        setCarrito(carrito.filter(item => item.id !== id));
      };
    
      const aumentarCantidad = (producto) => {
        setCarrito(
          carrito.map(item =>
            item.id === producto.id
              ? { ...item, cant: item.cant + 1 }
              : item
          )
        );
      };
    
      const disminuirCantidad = (producto) => {
        if (producto.cant === 1) {
          eliminarDelCarrito(producto.id);
        } else {
          setCarrito(
            carrito.map(item =>
              item.id === producto.id
                ? { ...item, cant: item.cant - 1 }
                : item
            )
          );
        }
      };
      
      useEffect(() => {
        const nuevoTotal = carrito.reduce(
          (acc, item) => acc + item.cant * item.price,
          0
        );
        console.log(nuevoTotal);
        setTotal(nuevoTotal);
        console.log(total);
      }, [carrito]);

        return (
            <CarritoContext.Provider 
                value={{ 
                carrito,
                agregarAlCarrito,
                eliminarDelCarrito,
                aumentarCantidad,
                disminuirCantidad,
                total,
                vaciarCarrito
                }}>
            {children}
            </CarritoContext.Provider>
        );
    };

    export default CarritoProvider;