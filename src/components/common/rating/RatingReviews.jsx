import RatingReviewsStyle from "./RatingReviews.module.css";
import RatingStars from "./RatingStars";

const RatingReviews = ({rating, reviewsCounter}) => {
  return (
      <div className={RatingReviewsStyle.rating}>
        <RatingStars rating={rating}/>
        <ReviewsCounter reviewsCounter={reviewsCounter}/>
      </div>
  )
}

const ReviewsCounter = ({reviewsCounter}) => {

  return (
      <pre>
        <p className={RatingReviewsStyle.reviews}>
        {`${reviewsCounter} Reviews`}
        </p>
      </pre>
  )
}

export default RatingReviews;