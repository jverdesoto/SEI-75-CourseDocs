import { Link } from 'react-router-dom';

export default function NavBar({ user }) {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/actors">Actors</Link>
          </li>
        </ul>
      </nav>
      {user && <p>Welcome, {user}!</p>}
    </div>
  );
};

