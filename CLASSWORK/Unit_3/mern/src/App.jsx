import './App.css';
import React, { useState, useEffect } from 'react';
import AuthPage from './views/AuthPage';
import NewOrderPage from './views/NewOrderPage';
import OrderHistoryPage from './views/OrderHistoryPage';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetch('http://localhost:4000/api/users/verify', {  
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(res => res.json())
      .then(data => {
        if (data.valid) {
          setUser(data.user); 
        }
      })
      .catch(err => {
        console.log('Token verification failed', err);
      });
    }
  }, []);
  

  const handleLogin = (userData) => {
    setUser(userData);
  };

  return (
    <Router>
      <main className="App">
        {user ? (
          <>
            <NavBar />
            <Routes>
              <Route path="/orders/new" element={<NewOrderPage />} />
              <Route path="/orders" element={<OrderHistoryPage />} />
              <Route path="/" element={<Navigate to="/orders/new" />} />
              <Route path="*" element={<Navigate to="/orders/new" />} />
            </Routes>
          </>
        ) : (
          <Routes>
            <Route path="/" element={<AuthPage onLogin={handleLogin} />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        )}
      </main>
    </Router>
  );
};

export default App;
