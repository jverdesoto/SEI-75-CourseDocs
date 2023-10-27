import { useParams } from "react-router-dom"

export default function MovieDetail(props) {
  const title = useParams()
  const movieFound = props.movies.find(movie => movie.title === title.movieName)
  return (
    <div>
      <div className="movie-details">
        <h1>{movieFound.title}</h1>
        <h3>{movieFound.releaseDate}</h3>
        <ul>
          {movieFound.cast.map(actor => {
            return <li key={actor}>{actor}</li>
          })}
        </ul>
      </div>
      <div className="movie-poster">
        <img src={`${movieFound.posterPath}`} alt="movie-poster" />
      </div>
    </div>
  )
}
