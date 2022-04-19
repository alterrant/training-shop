import React from "react";
import PropTypes from "prop-types";
import ReviewsStyle from "../../../product/productDescription/reviews/Reviews.module.css";

const CustomReviewErrorMessage = ({ children }) => (
  <div className={ReviewsStyle.reviewMessageError}>{children}</div>
);

export default CustomReviewErrorMessage;

CustomReviewErrorMessage.propTypes = {
  children: PropTypes.string.isRequired,
};
