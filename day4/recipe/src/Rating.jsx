import { Star, StarHalf } from "lucide-react";

const Rating = (props) => {
  const rating = Number(props.rating);
  const safeRating = Number.isFinite(rating)
    ? Math.min(5, Math.max(0, rating))
    : 0;
  const integer = Math.floor(safeRating);
  const point = safeRating - integer;

  const fullStars = Array.from({ length: integer }, (_, index) => (
    <Star key={`full-${index}`} color="gold" />
  ));
  const halfStar =
    point >= 0.5 ? <StarHalf key="half" color="gold" /> : null;

  return (
    <div>
      평점:{props.rating} {fullStars} {halfStar}
    </div>
  );
};

export default Rating;
