import { Chip } from "@mui/material";

const ReviewCount = (props) => {
  return (
    <div>
      리뷰카운트:
      <Chip label={`${props.reviewCount}`} color="primary" />
    </div>
  );
};

export default ReviewCount;
