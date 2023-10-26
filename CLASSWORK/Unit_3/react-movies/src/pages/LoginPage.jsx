import { useState } from 'react'
import './LoginPage.css'

export default function LoginPage({ setUser }) {
  const [username, setUsername] = useState('')

  const handleLogin = () => {
    setUser(username);
    console.log(username)
  };

  return (
    <div className="login-page">
      <h1>Login Page</h1>
      <input
        type="text"
        className="input-field"
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button className="login-button" onClick={handleLogin}>
        Log In
      </button>
    </div>
  );
};

