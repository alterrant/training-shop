import React from "react";
import PropTypes from "prop-types";
import RatingStars from "./RatingStars";
import RatingReviewsStyle from "./RatingReviews.module.css";

const RatingReviews = ({ rating, reviewsCounter }) => (
  <div className={RatingReviewsStyle.rating}>
    <RatingStars rating={rating} />
    <ReviewsCounter reviewsCounter={reviewsCounter} />
  </div>
);

const ReviewsCounter = ({ reviewsCounter }) => (
  <pre>
    <p className={RatingReviewsStyle.reviews}>{`${reviewsCounter} Reviews`}</p>
  </pre>
);

export default RatingReviews;

RatingReviews.propTypes = {
  rating: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.oneOf([null]).isRequired,
  ]),
  reviewsCounter: PropTypes.number.isRequired,
};
ReviewsCounter.propTypes = {
  reviewsCounter: PropTypes.number.isRequired,
};
