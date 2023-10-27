import { Link } from "react-router-dom"

export default function MovieCard(props) {
  return (
    <Link to={`/movies/${props.movie.title}`}>
    <div style={{"backgroundImage": `url(${props.movie.posterPath})`}}>
        <div>
            <h1>{props.movie.title}</h1>
            <h6>{props.movie.releaseDate}</h6>
        </div>
    </div>
    </Link>
  )
}
