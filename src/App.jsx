import  { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import './styles/generals.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './components/Login/Login'
import Footer from './components/Footer/Footer'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/Placeorder/PlaceOrder'
import Products from './pages/admin/Products'
import Dashboard from './pages/admin/Dashboard'
import Users from './pages/admin/Users'


const App = () => {
  const [ShowLogin,setShowLogin] = useState(false)
  return (
   <div>
    <Navbar setShowLogin={setShowLogin} ShowLogin={ShowLogin}/>
   <Routes>
    <Route path='/' element={<Home ShowLogin={ShowLogin}/>}/>
    <Route path='/login' element={<Login/>}/>
    
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/order' element={<PlaceOrder/>}/>
     <Route path="/admin" element={<Dashboard/>} />
        <Route path="/admin/products" element={<Products/>} />
       
        <Route path="/admin/users" element={<Users/>} />
   </Routes>
   <Footer/>
   </div>
  )
}

export default App