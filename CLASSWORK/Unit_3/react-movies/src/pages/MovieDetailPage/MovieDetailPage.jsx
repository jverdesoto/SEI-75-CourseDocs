import { useParams } from "react-router-dom"
import { movies } from '../../data.js'
import { useEffect, useState } from "react"
import './MovieDetailPage.css'

export default function MovieDetailPage() {
  const movieTitle = useParams()
  const [movie, setMovie] = useState({
    posterPath: "",
    releaseDate: "",
    title: "",
    cast: []
  })
  
  useEffect(() => {
    const filterMovies = movies.filter(movie => movie.title === movieTitle.movieName)
    setMovie(filterMovies[0])
  },[movieTitle.movieName])

  return (
    <div className="MovieDetailPage">
      <img className="poster" src={movie.posterPath} alt={`${movie.title} poster`} />
      <div className="info">
        <h1>{movie.title}</h1>
        <h2>{movie.releaseDate}</h2>
        <h3>Starring:</h3>
        <ul>
          {
            movie.cast.map(actor => (
              <li>{actor}</li>  
            ))
          }
        </ul>
      </div>
    </div>
  )
}
