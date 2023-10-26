import { Link } from "react-router-dom"

export default function NavBar({user}) {
    return (
        <nav>
            <Link to='/'>Movie List</Link>
            &nbsp; | &nbsp;
            <Link to='/actors'>Actor List</Link>
            &nbsp; | &nbsp;
            <h1>Hi {user}</h1>
        </nav>
      )
}