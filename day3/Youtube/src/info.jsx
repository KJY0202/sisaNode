import Description from "./Description";
import Title from "./Title";

const Info = (props) => {
  return (
    <div style={{ display: "flex", gap: "5px", flexDirection: "column" }}>
      <Title title={props.title} />
      <Description desc={props.desc} />
    </div>
  );
};

export default Info;
