import { useState } from 'react';

export default function LoginPage({ setUser }) {
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    setUser(username);
  };

  return (
    <div>
      <h1>Login Page</h1>
      <input
        type="text"
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
};

