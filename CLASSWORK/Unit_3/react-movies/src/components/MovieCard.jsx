import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const cardStyle = {
    background: `url(${movie.posterPath}) no-repeat center center`,
    WebkitBackgroundSize: "cover",
    border: '1px solid grey',
    borderRadius: '8px',
    padding: '10px', 
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'transform 0.2s',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: 'inherit',
  }

  const whiteText = {
    color: 'white', // Set text color to white
  }

  return (
    <Link to={`/movies/${movie.title}`} className="movie-link" style={linkStyle}>
      <div className="MovieCard" style={cardStyle}>
        <h4 style={whiteText}>{movie.title}</h4>
        <p style={whiteText}>{movie.releaseDate}</p>
      </div>
    </Link>
  );
};

export default MovieCard;
