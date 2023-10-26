import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ActorCard({ actor }) {
  const path = `/actors/${actor}`;
  return (
    <Link to={path}>
      <Card className="bg-dark text-white m-3">
        <Card.Img
          src="https://picsum.photos/400/300"
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
              fontSize: "2em",
            }}
          >
            {actor}
          </Card.Title>
        </Card.ImgOverlay>
      </Card>
    </Link>
  );
}
