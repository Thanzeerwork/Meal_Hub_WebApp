import React from 'react'
import Navbar from './components/Navbar/Navbar'
import './styles/generals.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Footer from './components/Footer/Footer'


const App = () => {
  return (
   <div>
    <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    
   </Routes>
   <Footer/>
   </div>
  )
}

export default App