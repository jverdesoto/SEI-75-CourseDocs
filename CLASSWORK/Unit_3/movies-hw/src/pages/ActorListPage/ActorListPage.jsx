import { ActorDetailPage } from "../../components/ActorDetailPage/ActorDetailPage";

export default function ActorListPage({movies}) {
    const allActors = movies.flatMap(movie => movie.cast);
    const uniqueActors = Array.from(new Set(allActors));

    return (
      <>
        <div>
            {uniqueActors.map(actor => (
                <ActorCard key={actor} name={actor} />
            ))}
        </div>
        {/* <ActorDetailPage  movies={movies}/> */}
        </>
    );
}

function ActorCard({ name }) {
    return (
        <div className="actor-card">
            <img src={`https://picsum.photos/seed/${name}/200/300`} alt={name} />
            <h3>{name}</h3>
        </div>
    );
}
