import ActorCard from "../../components/ActorCard/ActorCard";
import { movies } from "../../data";
import "./ActorListPage.css"

export default function ActorListPage() {
  const allActors = movies.flatMap((movie) => movie.cast);
  const uniqueActors = Array.from(new Set(allActors));

  return (
    <div className="actors-list">
      {uniqueActors.map((actor, index) => (
        <ActorCard key={index} actorName={actor} />
      ))}
    </div>
  
)}
