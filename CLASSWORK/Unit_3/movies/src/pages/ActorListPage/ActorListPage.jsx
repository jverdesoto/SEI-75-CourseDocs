// ActorListPage.js
import { movies } from "../../data";
import ActorCard from "../../component/ActorCard/ActorCard";
import "./ActorListPage.css";

export default function ActorListPage() {
  // Create a Set to store unique actors
  const uniqueActors = new Set();

  // Iterate through movies and add actors to the set
  movies.forEach(movie => {
    movie.cast.forEach(actor => {
      uniqueActors.add(actor);
    });
  });

  // Convert set to an array for mapping
  const actorList = [...uniqueActors];

  return (
    <div className="actors-list">
      {actorList.map((actor, index) => (
        <ActorCard key={index} actor={actor} />
      ))}
    </div>
  );
}
