import React from "react";

export default function MovieCard({ movie }) {
  const cardStyle = {
    backgroundImage: `url(${movie.posterPath})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return (
    <div className="movie-card" style={cardStyle}>
      <h2>{movie.title}</h2>
      <p>Release date: {movie.releaseDate}</p>
      <p>Cast: {movie.cast.join(", ")}</p>
    </div>
  );
}
