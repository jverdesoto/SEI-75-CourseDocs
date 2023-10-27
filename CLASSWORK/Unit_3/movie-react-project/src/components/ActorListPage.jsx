import { useEffect, useState } from "react";
import { movies } from "../../src/data";
import ActorCardComponent from "./ActorCardComponent";
export default function ActorListPage() {
  const [actorList, setActorList] = useState([]);
  useEffect(() => {
    movies.map((movie) => {
      movie.cast.map((actor) => {
        if (!actorList.includes(actor))
          setActorList((actorList) => [...actorList, actor]);
      });
    });
  });

  return (
    <div>
      {actorList.map((actor, index) => (
        <ActorCardComponent key={index} actor={actor} />
      ))}
    </div>
  );
}
