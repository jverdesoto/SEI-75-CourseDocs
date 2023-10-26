import { useParams } from "react-router-dom"

export default function MovieDetailPage({movies}) {
  const {movieName} = useParams()

  const movie = movies.find(movie => movie.title === movieName)

  return (
    <div className="flex">
      <div>
      <h1>{movie.title}</h1>
      <p>Released on: {new Date(movie.releaseDate).toLocaleDateString()}</p>
      <h3>Cast Members:</h3>
      <h5>{movie.cast.map(actor => {
        return <div key={actor}>{actor}</div>
      })
      }</h5>
      </div>
      <img src={`${movie.posterPath}`} alt="" />
    </div>
  );
};
