
import { useParams } from 'react-router-dom';
import { movies } from '../../data';

function MovieDetailPage() {
  const { movieName } = useParams();

  // Find the selected movie in the `movies` array based on the `movieName`
  const selectedMovie = movies.find((movie) => movie.title === movieName);

  if (!selectedMovie) {
    return <div>Movie not found.</div>;
  }

  const { posterPath, title, releaseDate, cast } = selectedMovie;

  return (
    <div>
      <img src={posterPath} alt={title} />
      <h2>{title}</h2>
      <p>Release Date: {releaseDate}</p>
      <p>Cast: {cast.join(', ')}</p>
    </div>
  );
}

export default MovieDetailPage;
