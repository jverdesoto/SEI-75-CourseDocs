

function MovieCard({ posterPath, title, releaseDate }) {
  return (
    <div className="movie-card">
      <img src={posterPath} alt={title} />
      <h3>{title}</h3>
      <p>Release Date: {releaseDate}</p>
    </div>
  );
}

export default MovieCard;
