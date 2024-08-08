import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import RegisterPage from './components/RegisterPage'
import LoginPage from './components/LoginPage'

function App() {

  return (
    <>
    <div className='container-fluid'>
      <Navbar/>
      {/*<Home/>*/}
      {/*<RegisterPage/>*/}
      <LoginPage/>
      <Footer/>
    </div>
    </>
  )
}

export default App
