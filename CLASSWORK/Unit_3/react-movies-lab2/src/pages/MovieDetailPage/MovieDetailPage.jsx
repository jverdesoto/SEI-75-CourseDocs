import { useParams } from "react-router-dom";
import { movies } from '../../data';

const MovieDetailsPage = () => {
    const { movieName } = useParams()
    const movie = movies.find((movie) => movie.title === movieName)

    const castArray = movie.cast
    const castString = castArray.join(', ')
    return (
        <div>
            <h3>{movie.title}</h3>
            <p>{movie.releaseDate}</p>
            <img src={movie.posterPath} alt="poster for this movie" />
            <p>Cast: </p>
            <p>{castString}</p>
        </div>
    );
}

export default MovieDetailsPage;