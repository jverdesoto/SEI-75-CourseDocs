import React from "react";
import { useParams } from "react-router-dom";

export default function ActorDetailPage({ movies }) {
  const { actorName } = useParams();
  let repertory = [];
  movies.forEach((movie) => {
    if (movie.cast.includes(actorName)) repertory.push(movie.title);
  });

  return (
    <div className="container d-flex justify-content-around">
      <div>
        <h1>{actorName}</h1>
        <h2>Movies:</h2>
        {repertory.map((film) => {
          return <h3>{film}</h3>;
        })}
      </div>
      <img src="https://picsum.photos/500/700" alt="" />
    </div>
  );
}
