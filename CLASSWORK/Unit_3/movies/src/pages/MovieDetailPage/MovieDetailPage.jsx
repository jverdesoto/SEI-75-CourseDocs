import { useParams } from 'react-router-dom'
import { movies } from '../../data';
export default function MovieDetailPage() {
    const { moviename } = useParams(); // Destructuring the parameter directly.
    // It might be better to compare titles in a case-insensitive manner.
    const singleMovie = movies.find(m => m.title.toLowerCase() === moviename.toLowerCase());
    // Check if the movie exists. If not, display a not-found message.
    if (!singleMovie) {
        return <h1>Movie not found!</h1>;
    }
  return (
    <div>
    <h1>{singleMovie.title}</h1>
    <p>Release Date: {singleMovie.releaseDate}</p>
    <img src={singleMovie.posterPath} alt={singleMovie.title} />
    <p>Cast: {singleMovie.cast.join(', ')}</p>
</div>
  )
}