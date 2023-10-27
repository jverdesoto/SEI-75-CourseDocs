import { Link } from "react-router-dom";
import './NavBar.css'

const NavBar = ({ user }) => {
    return (
        <>
            <div className="navbar">
                <div className="links">
                    <Link to={'/'}>Movies List</Link>
                    <Link to={'/actors'}>Actors List</Link>
                </div>
                <div className="user">
                    <p>Hi {user}</p>
                </div>
            </div>
        </>
    );
}

export default NavBar;