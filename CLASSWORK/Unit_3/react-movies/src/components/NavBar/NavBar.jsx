import { Link } from "react-router-dom"
import './NavBar.css'

export default function NavBar({ user }) {
  return (
    <nav>
      <h1>React Movies</h1>
      <Link to="/">Movies List</Link>
      &nbsp; | &nbsp;
      <Link to="/actors">Actors List</Link>
      &nbsp; | &nbsp;
      <p>Hello { user }</p>
    </nav>
  )
}
