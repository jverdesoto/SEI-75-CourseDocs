import MovieCard from '../../components/MovieCard/MovieCard';
import NavBar from '../../components/NavBar/NavBar'
import { movies } from '../../data'
import { Link } from "react-router-dom";
import './MoviesListPage.css'


const MoviesListPage = ({ user }) => {
    return (
        <div className='movies-list-page'>
            <NavBar user={user} />
            <div className='posters'>
                {movies.map((movie) => (
                    <Link to={`/movies/${movie.title}`}><MovieCard movie={ movie } /></Link>
                ))}
            </div>
        </div>
    );
}

export default MoviesListPage;