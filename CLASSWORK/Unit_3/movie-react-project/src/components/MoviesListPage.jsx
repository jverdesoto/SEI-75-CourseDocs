import { movies } from "../../src/data";
import MovieListItem from "./MovieListItem";
export default function MoviesListPage() {
  return (
    <div>
      {movies.map((movie, index) => (
        <MovieListItem key={index} movie={movie} />
      ))}
    </div>
  );
}
