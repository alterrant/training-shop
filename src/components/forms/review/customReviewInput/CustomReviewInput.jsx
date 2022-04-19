import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import classNames from "classnames/bind";
import { resetReviewForm } from "../../../../redux/formsReduser";
import ReviewsStyle from "../../../product/productDescription/reviews/Reviews.module.css";

export const CustomReviewInput = ({
  field,
  form,
  postingReviewStatus = false,
  placeholder,
}) => {
  const dispatch = useDispatch();
  const className = classNames.bind(ReviewsStyle);

  return (
    <input
      type="input"
      className={className("inputReview", {
        reviewFormError: form.errors.name && form.touched.name,
      })}
      /* eslint-disable react/jsx-props-no-spreading */
      {...field}
      onClick={() => {
        if (postingReviewStatus) dispatch(resetReviewForm());
      }}
      placeholder={placeholder}
      data-test-id="review-name-field"
    />
  );
};

export default CustomReviewInput;

CustomReviewInput.propTypes = {
  field: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.func])
  ),
  form: PropTypes.instanceOf(Object),
  postingReviewStatus: PropTypes.oneOfType([
    PropTypes.oneOf([null]),
    PropTypes.bool,
    PropTypes.string,
  ]),
  placeholder: PropTypes.string,
};
