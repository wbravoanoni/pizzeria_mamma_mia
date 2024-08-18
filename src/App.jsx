import './App.css'
import Navbar from './components/Navbar'
import Cart from './components/Cart'
import Footer from './components/Footer'
import Home from './components/Home'
import { useState } from 'react'
import {pizzaCart} from './assets/js/pizzas'
//import RegisterPage from './components/RegisterPage'
//import LoginPage from './components/LoginPage'


function App() {

  const [show,setShow] = useState(false);
  const [carrito,setCarrito] = useState([]);

  const showHome = () => {
    setShow(false);
  }

  const showCarrito = () => {
    setShow(true);
  }

  const agregarAlCarrito = (producto) => {

    //verificar si el producto ya esta en el carrito
    const itemEnCarrito = carrito.find(item => item.id === producto.id);

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

  return (
    <>
    <div className='container-fluid'>
      <Navbar carrito={carrito}/>
      {/*<RegisterPage/>*/}
      {/*<LoginPage/>*/}

      {show ? ( <Cart showHome={showHome} carrito={carrito} agregarAlCarrito={agregarAlCarrito} eliminarDelCarrito={eliminarDelCarrito} aumentarCantidad={aumentarCantidad} disminuirCantidad={disminuirCantidad}/>) : (<Home showCarrito={showCarrito} agregarAlCarrito={agregarAlCarrito}/>) }

      <Footer/>
    </div>
    </>
  )
}

export default App
