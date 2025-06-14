import  { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import './styles/generals.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Footer from './components/Footer/Footer'


const App = () => {
  const [ShowLogin,setShowLogin] = useState(false)
  return (
   <div>
    <Navbar setShowLogin={setShowLogin} ShowLogin={ShowLogin}/>
   <Routes>
    <Route path='/' element={<Home ShowLogin={ShowLogin}/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
   </Routes>
   <Footer/>
   </div>
  )
}

export default App