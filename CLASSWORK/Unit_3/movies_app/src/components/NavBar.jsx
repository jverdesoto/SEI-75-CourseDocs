import { Link } from "react-router-dom"

export default function NavBar({ user }) {
  return (
    <div>
      <Link to="/">
        <button>Movies</button>
      </Link>
      <Link to="/actors">
        <button>Actors</button>
      </Link>
      <p>Welcome, {user}</p>
    </div>
  )
}
