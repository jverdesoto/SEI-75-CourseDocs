import MovieCard from "../components/MovieCard"
import { movies } from '../data'
import './MoviesListPage.css'

export default function MoviesListPage() {
  return (
    <div className="movies-list-page">
      <h1>Movies List Page</h1>
      <div className="movie-card-container">
        {movies.map((movie) => (
          <MovieCard key={movie.title} movie={movie} />
        ))}
      </div>
    </div>
  );
};