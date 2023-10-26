import MovieCard from "../../components/MovieCard/MovieCard";
import { movies } from "../../data";
import "./MovieListPage.css";

export default function MoviesListPage() {
  return (
    <div className="movies-list">
      {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </div>
  );
}
