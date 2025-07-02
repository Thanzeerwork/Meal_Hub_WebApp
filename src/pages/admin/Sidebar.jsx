import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-60 bg-white dark:bg-gray-900 p-4 h-screen shadow-lg">
      <h2 className="text-xl font-bold text-center mb-6 dark:text-white">Admin Panel</h2>
      <nav className="flex flex-col gap-3">
        <Link to="/admin/products" className="text-gray-700 dark:text-white hover:underline">Products</Link>
        <Link to="/admin/orders" className="text-gray-700 dark:text-white hover:underline">Orders</Link>
        <Link to="/admin/users" className="text-gray-700 dark:text-white hover:underline">Users</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
