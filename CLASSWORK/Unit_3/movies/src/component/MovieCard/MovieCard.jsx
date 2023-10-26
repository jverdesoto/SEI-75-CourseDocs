import { Link } from "react-router-dom"

export default function MovieCard({movie}) {
  return (
    <div className="movie-card">
      <img src={movie.posterPath} />
      <Link movie={movie} to={`/moviedetailpage/${movie.title}`}> <h2>{movie.title}</h2></Link>
      <p>Release Date: {movie.releaseDate}</p>
      <p>Cast: {movie.cast.join(",")}</p>
    </div>

  )
}
