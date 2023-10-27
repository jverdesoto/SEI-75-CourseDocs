export default function MovieDetailPage({ movie }) {
    return (
      <>
        <h1>{movie.title}</h1>
        <img src={movie.posterPath} />
        <p>Release Date : {movie.releaseDate}</p>
        {movie.cast.map((c, index) => (
          <p>{c}</p>
        ))}
      </>
    );
  }
  