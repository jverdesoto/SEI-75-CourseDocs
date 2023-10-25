import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/orders/new">New Order</Link></li>
        <li><Link to="/orders">Order History</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
