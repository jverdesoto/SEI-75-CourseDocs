import { useState } from "react";

export default function LoginPage({ setUser }) {
  const [username, setUserName] = useState("");

  function handleUserNameChange(event) {
    setUserName(event.target.value);
  }

  function handleFormSubmit(evt) {
    evt.preventDefault();
    setUser(username);
  }

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleUserNameChange}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
