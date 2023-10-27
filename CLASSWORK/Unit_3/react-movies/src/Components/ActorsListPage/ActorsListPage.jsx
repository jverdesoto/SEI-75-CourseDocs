import React from 'react';
import ActorCard from '../ActorCard/ActorCard';
import { movies } from '../../data'; 

function ActorsListPage() {
  // Create a Set to store unique actor names
  const uniqueActors = new Set();

  // Iterate over the movies array and add actors to the Set
  movies.forEach((movie) => {
    movie.cast.forEach((actor) => {
      uniqueActors.add(actor);
    });
  });

  // Convert the Set back to an array
  const uniqueActorsArray = Array.from(uniqueActors);

  return (
    <div>
      {uniqueActorsArray.map((actor, index) => (
        <ActorCard key={index} actorName={actor} />
      ))}
    </div>
  );
}

export default ActorsListPage;
