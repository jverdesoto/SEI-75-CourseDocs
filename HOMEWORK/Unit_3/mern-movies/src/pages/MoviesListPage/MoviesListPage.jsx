import React from "react";

import MovieCard from "../../components/MovieCard/MovieCard.jsx";

export default function MoviesListPage({ movies }) {
  return (
    <>
      <div className="d-flex flex-wrap">
        {movies.map((movie) => {
          return <MovieCard movie={movie} key={movie} />;
        })}
      </div>
    </>
  );
}
