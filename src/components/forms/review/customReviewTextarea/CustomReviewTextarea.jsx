import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import classNames from "classnames/bind";
import { resetReviewForm } from "../../../../redux/formsReduser";
import ReviewsStyle from "../../../product/productDescription/reviews/Reviews.module.css";

export const CustomReviewTextarea = ({
  field,
  form,
  postingReviewStatus = false,
  placeholder,
}) => {
  const dispatch = useDispatch();

  const className = classNames.bind(ReviewsStyle);

  return (
    <textarea
      className={className("textareaReview", {
        reviewFormError: form.errors.text && form.touched.text,
      })}
      onClick={() => {
        if (postingReviewStatus) dispatch(resetReviewForm());
      }}
      placeholder={placeholder}
      data-test-id="review-text-field"
      /* eslint-disable react/jsx-props-no-spreading */
      {...field}
    />
  );
};

export default CustomReviewTextarea;

CustomReviewTextarea.propTypes = {
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
