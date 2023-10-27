
import MovieCard from "../MovieCard/MovieCard";
import { movies } from "../../data";
import './MoviesList.css'

function MoviesListPage() {
  return (
    <div className="movie-container">
      {movies.map((movie, index) => (
        <MovieCard
          key={index}
          posterPath={movie.posterPath}
          title={movie.title}
          releaseDate={movie.releaseDate}
        />
      ))}
    </div>
  );
}

export default MoviesListPage;
