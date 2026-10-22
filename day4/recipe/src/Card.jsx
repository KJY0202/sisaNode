import Rating from "./Rating.jsx";
import ReviewCount from "./ReviewCount.jsx";
import Difficulty from "./Difficulty.jsx";
import Name from "./Name";
import Image from "./Image.jsx";

const Card = (props) => {
  return (
    <article style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <div style={{ flex: "1" }}>
        <Image image={props.image} />
      </div>
      <div>
        <Name name={props.name} />
        <ReviewCount reviewCount={props.reviewCount} />
        <Rating rating={props.rating} />
        <br />
        <Difficulty difficulty={props.difficulty} />
      </div>
    </article>
  );
};

export default Card;
