import React, { useContext, useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import { StoreContext } from '../../context/StoreContext'; // Adjust the path as per your folder structure

const Dashboard = () => {
  const { food_list } = useContext(StoreContext);
   const [users, setUsers] = useState([]);
   
  
    useEffect(() => {
      // Fetch users from localStorage
      const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
      setUsers(storedUsers);
    }, []);


  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-black pt-25">
      <Sidebar />
      <div className="p-8 w-full">
        <h1 className="text-3xl font-bold mb-4 text-black dark:text-white">Admin Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card title="Products" value={food_list.length} />
          <Card title="Orders" value="19" />
          <Card title="Inventory Low" value="5" />
          <Card title="Users" value={users.length}/>
        </div>
      </div>
    </div>
  );
};

const Card = ({ title, value }) => (
  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
    <p className="text-sm text-gray-500 dark:text-gray-300">{title}</p>
    <h2 className="text-2xl font-semibold dark:text-white">{value}</h2>
  </div>
);

export default Dashboard;
