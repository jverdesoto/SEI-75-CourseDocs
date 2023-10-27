import ActorDetail from "../components/ActorDetail";

export default function ActorList(props) {
  const actors = props.movies.flatMap(movie => movie.cast)
  const uniqueActorsSet = new Set(actors)
  const uniqueActors = Array.from(uniqueActorsSet)
  console.log(uniqueActors);
  console.log(actors);
  return (
    <div>
      {uniqueActors.map( actor => {
        return <ActorDetail actor={actor} />
      })}
    </div>
  )
}
