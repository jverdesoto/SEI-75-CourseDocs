import { Link } from "react-router-dom";

export default function NavBar({ user }) {
  return (
    <nav className="mb-5">
      <Link to="/">Movie List</Link>
      &nbsp; | &nbsp;
      <Link to="/actors">Actors List</Link>
      <div
        style={{
          display: "inline-block",
          marginLeft: "20px",
        }}
      >
        Welcome, {user}
      </div>
    </nav>
  );
}
