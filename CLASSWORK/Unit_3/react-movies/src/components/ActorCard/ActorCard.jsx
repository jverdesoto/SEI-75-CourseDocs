import React from "react";

export default function ActorCard({ actorName }) {
  const imageSrc = `https://picsum.photos/200/300?random=${Math.floor(Math.random() * 1000)}`;
  const cardStyle = {
    backgroundImage: `url(${imageSrc})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return (
    <div className="actor-card" style={cardStyle}>
      <h2>{actorName}</h2>
    </div>
  );
}
