import MovieCard from "../components/MovieCard"

export default function MovieList(props) {
  return (
    <div>
      {props.movies.map( movie => {
        return <MovieCard movie={movie} />
      })}
    </div>
  )
}
