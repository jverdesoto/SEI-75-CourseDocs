import React, { useState } from 'react';
import axios from 'axios'; // Make sure to install axios if you haven't: npm install axios

const AuthPage = ({ onLogin }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      let response;
      if (isSignUp) {
        // Call the /register API route
        response = await axios.post('http://localhost:3001/api/users/register', formData);
      } else {
        // Call the /login API route
        response = await axios.post('http://localhost:3001/api/users/login', formData);
      }

      if (response.data && response.data.token) {
        // Save the JWT token and pass the user data up
        localStorage.setItem('token', response.data.token);
        onLogin(response.data.user);
      } else if (response.data) {
        alert('User created'); // Or handle it some other way
      }
    } catch (error) {
      alert('An error occurred');
    }
  };

  return (
    <div>
      <h1>{isSignUp ? 'Sign Up' : 'Login'}</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
        />
        <button type="submit">{isSignUp ? 'Sign Up' : 'Login'}</button>
      </form>
      <button onClick={() => setIsSignUp(!isSignUp)}>
        {isSignUp ? 'Already have an account? Login' : 'New user? Sign Up'}
      </button>
    </div>
  );
};

export default AuthPage;
