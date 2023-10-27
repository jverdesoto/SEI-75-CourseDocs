import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <nav>
      <Link to="/"> All Movies</Link>
      &nbsp; | &nbsp;
      <Link to="/actors"> All Actors</Link>
    </nav>
  );
}
