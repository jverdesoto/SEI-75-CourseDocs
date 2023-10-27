function ActorCard({ actorName }) {
  // Generate a random image URL using actor's name as a seed
  const imageUrl = `https://picsum.photos/200/300/?random&name=${encodeURIComponent(actorName)}`;

  return (
    <div className="actor-container">
    <div className="actor-card">
      <div className="actor-image">
        <img src={imageUrl} alt={actorName} />
      </div>
      <div className="actor-name">{actorName}</div>
    </div>
    </div>
  );
}

export default ActorCard;
