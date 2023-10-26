import MovieCard from "../../component/MovieCard/MovieCard";
import { movies } from "../../data.js";

export default function MovieListPage() {
  return (
    <div className="movies-list">
      {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </div>
  )
}
