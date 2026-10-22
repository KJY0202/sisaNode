const Rate = (props) => {
  return <p className="recipe-rating">
    <span aria-hidden="true">★</span> {props.rate}
  </p>;
};

export default Rate;
