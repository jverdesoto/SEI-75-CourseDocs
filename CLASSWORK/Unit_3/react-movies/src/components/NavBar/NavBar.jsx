import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar({ user }) {
  return (
    <nav>
      <h1>NavBar</h1>
      {user && (
        <ul>
          <li>
            <Link to="/">Movies List</Link>
          </li>
          <li>
            <Link to="/actors">Actors List</Link>
          </li>
          <li>
            <span>{user.username}</span>
          </li>
        </ul>
      )}
    </nav>
  );
}
