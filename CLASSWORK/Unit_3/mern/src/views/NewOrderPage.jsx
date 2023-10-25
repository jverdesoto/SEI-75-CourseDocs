import React, { useState } from 'react';

const NewOrderPage = () => {
  const [orderName, setOrderName] = useState('');
  const [orderAmount, setOrderAmount] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newOrder = {
      name: orderName,
      amount: parseFloat(orderAmount),
      date: new Date()
    };
  
    const res = await fetch('/api/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newOrder)
    });
  
    if (res.ok) {
      console.log("Order added successfully");
      setOrderName('');
      setOrderAmount('');
    }
  };
  

  return (
    <div>
      <h1>New Order Page</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Order name" 
          value={orderName}
          onChange={(e) => setOrderName(e.target.value)}
        />
        <input 
          type="number" 
          placeholder="Amount"
          value={orderAmount}
          onChange={(e) => setOrderAmount(e.target.value)}
        />
        <button type="submit">Add Order</button>
      </form>
    </div>
  );
};

export default NewOrderPage;
