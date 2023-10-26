import './ActorDetailPage.css'
import { useParams } from "react-router-dom"
import { movies } from "../../data"

export default function ActorDetailPage() {
    const actor = useParams()
    function getActorMovies(actor) {
        const filter = movies.filter(movie => movie.cast.includes(actor))
        return filter.map(movie => movie.title)
    }

    return (
        <div className="ActorDetailPage">
            <h1>{ actor.actorName }</h1>
            <ul>
                {
                    getActorMovies(actor.actorName).map(movie => (
                        <li key={ movie }>{ movie }</li>
                    ))
                }
            </ul>
        </div>
    )
}
