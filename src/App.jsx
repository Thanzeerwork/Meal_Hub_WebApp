import { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Login from './components/Login/Login';
import PlaceOrder from './pages/Placeorder/PlaceOrder';
import Products from './pages/admin/Products';
import Dashboard from './pages/admin/Dashboard';
import Users from './pages/admin/Users';
import Cart from './components/Cart/Cart';
import Orders from './pages/admin/Orders';
import Particles from './blocks/Backgrounds/Particles/Particles';
import './styles/generals.css';

const App = () => {
  const [ShowLogin, setShowLogin] = useState(false);
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

 return (
  <div className="relative w-full min-h-screen text-white">
   
    <div className="fixed top-0 left-0 w-full h-full -z-10 bg-black">
      <Particles
        particleColors={['#ffffff', '#ffffff']}
        particleCount={150}
        particleSpread={9}
        speed={0.5}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={true}
      />
    </div>

   
    <Navbar setShowLogin={setShowLogin} ShowLogin={ShowLogin} />
    <Routes>
      <Route path="/" element={<Home ShowLogin={ShowLogin} setShowLogin={setShowLogin} />} />
      <Route path="/login" element={isLoggedIn ? <Navigate to="/" /> : <Login />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/order" element={<PlaceOrder />} />
      <Route path="/admin" element={<Dashboard />} />
      <Route path="/admin/products" element={<Products />} />
      <Route path="/admin/users" element={<Users />} />
      <Route path="/admin/orders" element={<Orders />} />
    </Routes>
    <Footer />
  </div>
);

};

export default App;
