import React from "react";
import ActorCard from "../../components/ActorCard/ActorCard";
import { act } from "react-dom/test-utils";

export default function ActorListPage({ movies }) {
  let actors = [];
  movies.forEach((movie) => {
    movie.cast.forEach((actor) => actors.push(actor));
  });
  const actorSet = new Set(actors);
  const actorArray = Array.from(actorSet);

  return (
    <>
      <div className="d-flex flex-wrap">
        {actorArray.map((actor) => {
          return <ActorCard actor={actor} key={actor} />;
        })}
      </div>
    </>
  );
}
