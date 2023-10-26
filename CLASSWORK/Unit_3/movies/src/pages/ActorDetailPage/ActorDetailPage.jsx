// ActorDetailPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { movies } from '../../data';

export default function ActorDetailPage() {
  const { actorname } = useParams();


  // Filter movies for the specific actor
  const actorMovies = movies.filter(movie => movie.cast.includes(actorname));

  return (
    <div>
      <h1>Movies Starring- {actorname}:</h1>
      <ul>
        {actorMovies.map((movie, index) => (
          <li key={index}>{movie.title} - Release Date: {movie.releaseDate}</li>
        ))}
      </ul>
    </div>
  );
}
