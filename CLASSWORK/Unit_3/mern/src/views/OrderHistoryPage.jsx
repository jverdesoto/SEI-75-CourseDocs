import React, { useState, useEffect } from 'react';

const OrderHistoryPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch orders from backend
    const fetchData = async () => {
      const res = await fetch('/api/orders');
      const data = await res.json();
      setOrders(data);
    };
    
    fetchData();
  }, []);

  return (
    <div>
      <h1>Order History Page</h1>
      <p>Here you can view your past orders.</p>
      <ul>
        {orders.map((order, index) => (
          <li key={index}>{order.name} - £{order.amount}</li>
        ))}
      </ul>
    </div>
  );
};

export default OrderHistoryPage;
