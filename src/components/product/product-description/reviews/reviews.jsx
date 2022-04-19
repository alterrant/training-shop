import { React, useEffect, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";

import RatingReviews from "../../../common/rating/rating-reviews";
import Review from "./review/review";
import ReviewForm from "../../../forms/review/review-form";
import changeBodyOverflow from "../../../../encapsulated-common-logics/change-boody-overflow";

import { ReactComponent as AnnotationSVG } from "../../../../assets/SVG/annotation.svg";

import ReviewsStyle from "./reviews.module.css";

const Reviews = ({ reviews, rating, productId }) => {
  const [isAnnotationOpened, setStatusAnnotation] = useState(false);

  const classNamesBind = classNames.bind(ReviewsStyle);
  const reviewFormStyle = classNamesBind("reviewForm", {
    reviewFormActive: isAnnotationOpened,
  });

  const closeShoppingCartHandler = (e) => {
    if (isAnnotationOpened && e.target.className === reviewFormStyle) {
      setStatusAnnotation(false);
    }
  };

  useEffect(() => {
    changeBodyOverflow(!isAnnotationOpened);
  });

  const reviewsLists = reviews.map((item) => (
    <Review review={item} key={item.id} />
  ));

  return (
    <section className={ReviewsStyle.wrapper}>
      {isAnnotationOpened && (
        <section
          className={reviewFormStyle}
          onClick={closeShoppingCartHandler}
          data-test-id="review-modal"
        >
          <div className={ReviewsStyle.reviewFormWrapper}>
            <p>Write a review</p>
            <ReviewForm
              isAnnotationOpened={isAnnotationOpened}
              setStatusAnnotation={setStatusAnnotation}
              productId={productId}
            />
          </div>
        </section>
      )}
      <h4>REVIEWS</h4>
      <div className={ReviewsStyle.commonInform}>
        <RatingReviews reviewsCounter={reviews.length} rating={rating} />
        <div
          className={ReviewsStyle.annotation}
          onClick={() => setStatusAnnotation(!isAnnotationOpened)}
          data-test-id={"review-button"}
        >
          <AnnotationSVG />
          <p>Write a review</p>
        </div>
      </div>
      <ul className={ReviewsStyle.reviewsWrapper}>{reviewsLists}</ul>
    </section>
  );
};

export default Reviews;

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      rating: PropTypes.number,
      text: PropTypes.string.isRequired,
    })
  ),
  rating: PropTypes.number,
  productId: PropTypes.string.isRequired,
};
