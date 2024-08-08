import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import RegisterPage from './components/RegisterPage'

function App() {

  return (
    <>
    <div className='container-fluid'>
      <Navbar/>
      {/*<Home/>*/}
      <RegisterPage/>
      <Footer/>
    </div>
    </>
  )
}

export default App
