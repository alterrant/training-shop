import React from "react";
import PropTypes from "prop-types";

import RatingStars from "../../../../common/rating/RatingStars";

import ReviewStyle from "./Review.module.css";

const Review = ({ review }) => {
  if (review.length === 0) return null;

  return (
    <li className={ReviewStyle.wrapper}>
      <div className={ReviewStyle.common}>
        <p>{review.name}</p>
        <div className={ReviewStyle.rating}>
          {/* timeStamp убрали для простоты
            {review.timeStamp} */}
          <RatingStars rating={review.rating} />
        </div>
      </div>
      <p className={ReviewStyle.description}>{review.text}</p>
    </li>
  );
};

export default Review;

Review.propTypes = {
  review: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    rating: PropTypes.number,
    text: PropTypes.string.isRequired,
  }),
};
