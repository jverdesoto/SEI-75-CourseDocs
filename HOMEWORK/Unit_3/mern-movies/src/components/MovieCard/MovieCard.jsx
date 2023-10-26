import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  const path = `/movies/${movie.title}`;
  return (
    <Link to={path}>
      <Card className="bg-dark text-white m-3">
        <Card.Img
          src={movie.posterPath}
          alt="Card image"
          style={{
            maxWidth: "600px" /* Adjust the maximum width as needed */,
            maxHeight: "400px" /* Adjust the maximum height as needed */,
            width: "auto",
            height: "auto",
          }}
        />
        <Card.ImgOverlay>
          <Card.Title
            style={{
              backgroundColor: "rgb(0,0,0, 0.4)",
            }}
          >
            {movie.title}
          </Card.Title>
          <Card.Text
            style={{
              backgroundColor: "rgb(0,0,0, 0.4)",
            }}
          >
            Released: {movie.releaseDate}
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
    </Link>
  );
}
