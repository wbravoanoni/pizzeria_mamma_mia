import './App.css'
import { Route, Routes } from 'react-router-dom'
import { useState, useContext} from 'react'
import {pizzaCart} from './assets/js/pizzas'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
//import RegisterPage from './pages/RegisterPage'
import RegisterPage from '../api/auth/register/Register'
import LoginPage from './pages/LoginPage'
import Login from '../api/auth/login/Login'
import Cart from './pages/Cart'
import Pizza from './pages/Pizza'
import NotFound from './pages/NotFound'
import Profile from './pages/Profile'
import CarritoProvider from "./context/CarritoContext";
import  ApiProvider  from "./context/ApiContext";
import { UserContext }  from "./context/UserContext";
import UserProvider from "./context/UserContext";

import  ApiContextPizza  from "./context/ApiContextPizza";

import { Navigate } from 'react-router-dom';



function App() {

  const {user} = useContext(UserContext)

  return (
    <>
      <div className='container-fluid'>
        <ApiProvider>
          <ApiContextPizza>
            <CarritoProvider>
              <Navbar carrito/>  
                  <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/cart' element={<Cart/>}/>
                    <Route path="/pizza/:id" element={<Pizza />} />
                    <Route path='/404' element={<NotFound/>}/>
                    <Route path="*"  element={<NotFound/>}/>
                    <Route path="/profile" element={user ? <Profile /> : <Navigate to="/login" replace />} />
                    <Route path="/login" element={user ?  <Navigate to="/" replace /> : <Login/>} />
                    <Route path="/register" element={user ?  <Navigate to="/" replace /> : <RegisterPage/> } />
                  </Routes>  
                  <Footer/>
            </CarritoProvider>
          </ApiContextPizza>
        </ApiProvider> 
    </div>
    </>
  )
}

export default App
