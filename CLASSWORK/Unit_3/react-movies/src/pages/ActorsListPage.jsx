import ActorCard from '../components/ActorCard'
import './ActorsListPage'

export default function ActorsListPage({movies}) {
  const actorsSet = new Set()

  movies.forEach((movie) => {
    movie.cast.forEach((actor) => {
      actorsSet.add(actor)
    })
  })

  const actorList = Array.from(actorsSet);

  return (
    <div className="actors-list-page">
      <h1>Actors List</h1>
      <div className="actors-list">
        <h5>{actorList.map((actor) => (
          <ActorCard key={actor} actor={actor} />
        ))}</h5>
      </div>
    </div>
  )
}
