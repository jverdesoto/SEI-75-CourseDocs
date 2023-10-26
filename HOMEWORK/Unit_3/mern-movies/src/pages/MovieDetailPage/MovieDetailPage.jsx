import { useParams } from "react-router-dom";

export default function MovieDetailPage({ movies }) {
  const { movieName } = useParams();
  const data = movies.find((movie) => movie.title === movieName);

  return (
    <div className="container d-flex justify-content-around">
      <div className="d-flex flex-column justify-content-center">
        <h1>{data.title}</h1>
        <h2>Release date: {data.releaseDate}</h2>
        <div>
          {data.cast.map((actor) => {
            return <h3>{actor}</h3>;
          })}
        </div>
      </div>
      <img src={data.posterPath} alt="" />
    </div>
  );
}
