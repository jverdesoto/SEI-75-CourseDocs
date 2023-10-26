import React from 'react';
// import "./ActorCard.css";
import { Link } from 'react-router-dom';
export default function ActorCard({ actor }) {
  return (
    <div className="actor-card">
      <Link actor={actor} to={`/actordetailpage/${actor}`}> <h2>{actor}</h2></Link>
    </div>
  );
}