import React, { useEffect, useState } from 'react';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users from localStorage
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(storedUsers);
  }, []);

  return (
    <div className="p-8 w-full">
      <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">User Accounts</h2>
      <table className="w-full bg-white dark:bg-gray-800 border rounded-lg">
        <thead>
          <tr className="bg-gray-200 dark:bg-gray-700">
            <th className="p-2 text-left">User ID</th>
            <th className="p-2 text-left">Name</th>
            <th className="p-2 text-left">Email</th>
            <th className="p-2 text-left">Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index} className="border-t">
              <td className="p-2">{index + 1}</td>
              <td className="p-2">{user.username || 'No Name'}</td>
              <td className="p-2">{user.email}</td>
              <td className="p-2 text-gray-600">User</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
