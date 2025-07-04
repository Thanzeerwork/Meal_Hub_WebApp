import React, { useEffect, useState } from 'react';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders") || "[]");
    setOrders(savedOrders);
  }, []);

  return (
    <div className="p-6 text-white bg-black min-h-screen">
      <h1 className="text-3xl font-bold mb-6">All Orders</h1>

      {orders.length === 0 ? (
        <p className="text-gray-400">No orders found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border border-white/20">
            <thead className="bg-white/10 uppercase">
              <tr>
                <th className="p-3">Order ID</th>
                <th className="p-3">Date</th>
                <th className="p-3">Items</th>
                <th className="p-3">Subtotal</th>
                <th className="p-3">Delivery Fee</th>
                <th className="p-3">Total</th>
              </tr>
            </thead>
            <tbody>
              {orders.map(order => (
                <tr key={order.id} className="border-t border-white/10 hover:bg-white/5">
                  <td className="p-3">{order.id}</td>
                  <td className="p-3">{order.date}</td>
                  <td className="p-3">
                    <ul className="list-disc ml-4">
                      {order.items.map(item => (
                        <li key={item.id}>
                          {item.name} × {item.quantity} (₹{item.total})
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className="p-3">₹{order.subtotal}</td>
                  <td className="p-3">₹{order.deliveryFee}</td>
                  <td className="p-3 font-semibold text-green-400">₹{order.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Orders;
