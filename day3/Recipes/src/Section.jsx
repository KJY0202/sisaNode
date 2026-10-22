import Name from "./Name";
import Image from "./Image";
import Rate from "./Rate";
import ReviewCount from "./ReviewCount";
import Level from "./Level";

const Section = (props) => {
  return (
    <article className="recipe-card">
      <Image img={props.data.image} name={props.data.name} />
      <div className="recipe-card-content">
        <Name name={props.data.name} />
        <Rate rate={props.data.rating} />
        <ReviewCount rc={props.data.reviewCount} />
        <Level
          style={{ color: props.data.difficulty === "Easy" ? "green" : "red" }}
          level={props.data.difficulty}
        />
      </div>
    </article>
  );
};

export default Section;
