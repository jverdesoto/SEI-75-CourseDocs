import './MovieCard.css'

export default function MovieCard({ movie }) {
  return (
    <div className="MovieCard" style={{ backgroundImage: `url(${movie.posterPath})` }}>
        <div className="info">
            <h1>{movie.title}</h1>
            <h2>{movie.releaseDate}</h2>
        </div>
    </div>
  )
}
