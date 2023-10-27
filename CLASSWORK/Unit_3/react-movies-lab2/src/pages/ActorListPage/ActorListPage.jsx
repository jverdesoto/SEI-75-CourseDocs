import { movies } from '../../data'
import ActorCard from '../../components/ActorCard/ActorCard'

const ActorListPage = () => {
    let actors = []
    movies.forEach((movie) => (
        actors = actors.concat(movie.cast) //joins arrays together!
    ))
    // console.log(actors)

    const actorsSet = new Set(actors)
    const actorsNoRepeat = Array.from(actorsSet)
    
    // const actorsNoRepeat = []
    // actors.forEach((actor) => {
    //     if(!actorsNoRepeat.includes(actor)){
    //         actorsNoRepeat.push(actor)
    //     }
    // })

    console.log('sem repetir', actorsNoRepeat)
    return (
        <div>
            <h1>List of Actors</h1>
            {actorsNoRepeat.map((actor)=>(
                <ActorCard actor={actor}/>
            ))}
        </div>
    );
}

export default ActorListPage;