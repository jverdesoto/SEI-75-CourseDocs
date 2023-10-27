import React, { useState } from 'react';

function LoginPage({ onLogin }) {
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    onLogin(username);
  };

  return (
    <div>
      <h2>Login Page</h2>
      <input
        type="text"
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
}

export default LoginPage;

