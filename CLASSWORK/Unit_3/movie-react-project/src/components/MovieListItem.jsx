import { useState } from "react";
import MovieDetailPage from "./MovieDetailPage";

export default function MovieListItem({ key, movie }) {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const sectionStyle = {
    width: "100%",
    height: "400px",
    backgroundImage: `url(${movie.posterPath})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  };

  function showMovieDetails(movie) {
    // alert(movie.title);
    setSelectedMovie(movie);
  }

  return (
    <div style={sectionStyle} onClick={() => showMovieDetails(movie)}>
      <div class="dataClass">
        <p class="textClass">{movie.title}</p>
        <p class="textClass">{movie.releaseDate}</p>
        {selectedMovie === movie ? <MovieDetailPage movie={movie} /> : null}
      </div>
    </div>
  );
}
