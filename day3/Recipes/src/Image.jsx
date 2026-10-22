const Image = (props) => {
  return <img className="recipe-image" src={props.img} alt={props.name} />;
};

export default Image;
