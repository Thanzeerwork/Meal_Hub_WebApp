// src/layouts/AdminLayout.jsx
import { Outlet } from 'react-router-dom';
import NavbarAdmin from '../components/NavbarAdmin/NavbarAdmin';
const AdminLayout = () => {
  return (
    
    <div className="relative w-full min-h-screen text-white">
       
      {/* Optional: Add sidebar/navbar here */}
      <NavbarAdmin />
      <Outlet />
    </div>
  );
};

export default AdminLayout;
