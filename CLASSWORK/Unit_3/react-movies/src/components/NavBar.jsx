import { Link } from 'react-router-dom';

const NavBar = ({ user }) => {
  const navStyle = {
    background: ' #121212',
    color: 'white', 
    padding: '10px 0',
  };

  const ulStyle = {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    padding: 0,
  };

  const linkStyle = {
    textDecoration: 'none',
    color: 'inherit',
  };

  const welcomeStyle = {
    color: 'black',
  };

  return (
    <div>
      <nav style={navStyle}>
        <ul style={ulStyle}>
          <li>
            <Link to="/" style={linkStyle}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/actors" style={linkStyle}>
              Actors
            </Link>
          </li>
        </ul>
      </nav>
      {user && <p style={welcomeStyle}>Welcome, {user}!</p>}
    </div>
  );
};

export default NavBar;
