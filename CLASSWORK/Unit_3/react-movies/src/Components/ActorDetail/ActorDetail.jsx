import { useParams } from 'react-router-dom';
import { movies } from '../../data'; 

function ActorDetail() {
  const { actorName } = useParams();

  // Find the selected actor in the movies based on their name
  const selectedActorMovies = movies.filter((movie) =>
    movie.cast.includes(actorName)
  );

  return (
    <div>
      <h2>Actor: {actorName}</h2>
      <h3>Movies:</h3>
      <ul>
        {selectedActorMovies.map((movie, index) => (
          <li key={index}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default ActorDetail;
