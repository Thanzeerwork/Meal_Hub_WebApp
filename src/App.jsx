import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './components/Login/Login';
import PlaceOrder from './pages/Placeorder/PlaceOrder';
import Products from './pages/admin/Products';
import Dashboard from './pages/admin/Dashboard';
import Users from './pages/admin/Users';
import Orders from './pages/admin/Orders';
import Cart from './components/Cart/Cart';
import './styles/generals.css'

import UserLayout from './layouts/UserLayout';
import AdminLayout from './layouts/AdminLayout';

const App = () => {
  const [ShowLogin, setShowLogin] = useState(false);
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  return (
    <Routes>
      {/* 🔵 User Routes */}
      <Route element={<UserLayout ShowLogin={ShowLogin} setShowLogin={setShowLogin} />}>
        <Route path="/" element={<Home ShowLogin={ShowLogin} setShowLogin={setShowLogin} />} />
        <Route path="/login" element={isLoggedIn ? <Navigate to="/" /> : <Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<PlaceOrder />} />
      </Route>

      {/* 🔴 Admin Routes */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="products" element={<Products />} />
        <Route path="users" element={<Users />} />
        <Route path="orders" element={<Orders />} />
      </Route>
    </Routes>
  );
};

export default App;
