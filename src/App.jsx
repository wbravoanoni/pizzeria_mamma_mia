import './App.css'
import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import {pizzaCart} from './assets/js/pizzas'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import Cart from './pages/Cart'
import Pizza from './pages/Pizza'
import NotFound from './pages/NotFound'
import Profile from './pages/Profile'


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
        <Routes>
          <Route path='/' element={<Home showCarrito={showCarrito} agregarAlCarrito={agregarAlCarrito}/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/cart' element={<Cart showHome={showHome} carrito={carrito} agregarAlCarrito={agregarAlCarrito} eliminarDelCarrito={eliminarDelCarrito} aumentarCantidad={aumentarCantidad} disminuirCantidad={disminuirCantidad}/>}/>
          <Route path='/pizza/p001' element={<Pizza/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/404' element={<NotFound/>}/>
          <Route path="*"  element={<NotFound/>}/>
        </Routes>  
      <Footer/>
      </div>
    

    </>
  )
}

export default App
