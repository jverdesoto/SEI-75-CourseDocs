import { useState } from 'react'
import { movies } from '../../data.js'
import './MoviesListPage.css'
import MovieCard from '../../components/MovieCard/MovieCard'
import { Link } from 'react-router-dom'

export default function MoviesListPage() {
  const [movieList, setMovieList] = useState([...movies])

  return (
    <div className="MoviesListPage">
      {
        movieList.map(movie => (
          <Link to={`/movies/${movie.title}`}>
            <MovieCard key={movie.title} movie={movie} />
          </Link>
        ))
      }
    </div>
  )
}
