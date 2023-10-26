import { Link } from 'react-router-dom'
import { movies } from '../../data' 
import './ActorListPage.css'

export default function ActorListPage() {
  const formatActors = () => {
    const allActors = movies.map(movie => movie.cast)
    const flatten = allActors.flat()
    const actorSet = new Set(flatten)
    return Array.from(actorSet)
  }
  
  
  return (
    <div className="ActorsListPage">
      <h1>Actors</h1>
      <ul>
        {
          formatActors().map(actor => (
            <li key={actor}><Link className="actorLink" to={`/actors/${actor}`}>{actor}</Link></li>
          ))
        }
      </ul>
    </div>
  )
}
