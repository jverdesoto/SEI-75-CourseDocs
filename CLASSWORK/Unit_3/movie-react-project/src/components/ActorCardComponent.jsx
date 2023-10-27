import { useState } from "react";
import ActorDetails from "./ActorDetails";
export default function ActorCardComponent({ key, actor }) {
  const sectionStyle = {
    width: "100%",
    height: "400px",
    backgroundImage: `url('https://picsum.photos/200/300')`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  };

  const [selectedActor, setSelectedActor] = useState(null);

  function showActorDetails(actor) {
    // alert(movie.title);
    setSelectedActor(actor);
  }

  return (
    <div style={sectionStyle} onClick={() => showActorDetails(actor)}>
      <div class="dataClass">
        <p class="textClass">{actor}</p>
        {selectedActor === actor ? <ActorDetails actor={actor} /> : null}
      </div>
    </div>
  );
}
