import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { React, useEffect, useRef } from "react";
import classNames from "classnames/bind";
import { ErrorMessage, Field, Form, Formik } from "formik";

import { postingReview, resetReviewForm } from "../../../redux/forms-reduser";
import { reviewValidator } from "../../../encapsulated-common-logics/validators";
import RatingStars from "../../common/rating/rating-stars";
import Preloader from "../../common/preloader/preloader";
import CustomReviewErrorMessage from "./custom-review-error-message/custom-review-error-message";
import CustomReviewInput from "./custom-review-input/custom-review-input";
import CustomReviewTextarea from "./custom-review-textarea/custom-review-textarea";

import ReviewsStyle from "../../product/product-description/reviews/reviews.module.css";

const ReviewForm = ({ setStatusAnnotation, isAnnotationOpened, productId }) => {
  const dispatch = useDispatch();
  const isPostingReview = useSelector((state) => state.forms.isPostingReview);
  const postingReviewStatus = useSelector(
    (state) => state.forms.postingReviewStatus
  );
  const reviewFormRef = useRef();
  const classNamesBind = classNames.bind(ReviewsStyle);

  const initialValues = {
    name: "",
    text: "",
    rating: 1,
  };

  const onSubmit = async (values, onSubmitProps) => {
    const { setErrors } = onSubmitProps;

    values.id = productId;

    try {
      await dispatch(postingReview(values));

      /* если нужно будет чистить форму после отправки
      resetForm({
        values: {name: '', text: '', rating: '1',},
        errors: {name: '', text: '', rating: ''}
      }); */
    } catch (error) {
      setErrors({ submit: error.message });
    } finally {
      // setTimeout(() => dispatch(resetReviewForm()), 3000);
    }
  };

  useEffect(() => {
    if (isAnnotationOpened && postingReviewStatus === "posting success") {
      setStatusAnnotation(false);
      dispatch(resetReviewForm());
    }
  }, [postingReviewStatus]);

  useEffect(() => {
    if (!isAnnotationOpened) {
      reviewFormRef.current.resetForm();
    }
  }, [isAnnotationOpened]);

  return (
    <Formik
      initialValues={initialValues}
      validate={reviewValidator}
      onSubmit={onSubmit}
      enableReinitialize
      innerRef={reviewFormRef}
    >
      {(formik) => {
        const disableCondition =
          formik.errors.email ||
          isPostingReview ||
          !formik.values.name ||
          !formik.values.text;

        return (
          <Form className={ReviewsStyle.form}>
            <div className={ReviewsStyle.formControl}>
              <RatingStars
                rating={formik.values.rating}
                isRatingInteractive
                formControle={formik.setFieldValue}
              />
              <ErrorMessage
                name="rating"
                component={CustomReviewErrorMessage}
              />
            </div>
            <div className={ReviewsStyle.formControl}>
              <Field
                name="name"
                component={CustomReviewInput}
                placeholder="Name"
                postingReviewStatus={postingReviewStatus}
              />
              <ErrorMessage name="name" component={CustomReviewErrorMessage} />
            </div>
            <div className={ReviewsStyle.formControl}>
              <Field
                as="textarea"
                name="text"
                component={CustomReviewTextarea}
                placeholder="Comment"
                postingReviewStatus={postingReviewStatus}
              />
              <ErrorMessage name="text" component={CustomReviewErrorMessage} />
            </div>
            <div className={ReviewsStyle.formControl}>
              <button
                className={classNamesBind(
                  disableCondition ? "disableReviewButton" : "submit"
                )}
                type="submit"
                disabled={disableCondition}
                data-test-id="review-submit-button"
              >
                {isPostingReview ? <Preloader /> : "Send"}
              </button>
              {postingReviewStatus &&
                postingReviewStatus !== "posting success" && (
                  <div className={ReviewsStyle.errorSubmitText}>
                    `Ошибка при отправке отзыва`
                  </div>
                )}
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default ReviewForm;

ReviewForm.propTypes = {
  setStatusAnnotation: PropTypes.func,
  isAnnotationOpened: PropTypes.bool,
  productId: PropTypes.string,
};
