import ReviewsStyle from "./Reviews.module.css";
import RatingReviews from "../common/RatingReviews";
import {averageRatingReviews} from "../../encapsulatedCommonLogics/averageRating";
import {ReactComponent as AnnotationSVG} from "./../../assets/SVG/annotation.svg";
import Review from "./Review";

const Reviews = ({reviews}) => {
  const averageRating = averageRatingReviews(reviews);

  const reviewsLists = reviews.map(item => <Review review={item} key={item.id}/>)

  return (
      <section className={ReviewsStyle.wrapper}>
        <h4>REVIEWS</h4>
        <div className={ReviewsStyle.commonInform}>
          <RatingReviews reviewsCounter={reviews.length} rating={averageRating}/>
          <div className={ReviewsStyle.annotation}>
            <AnnotationSVG/>
            <p>Write a review</p>
          </div>
        </div>
        <ul className={ReviewsStyle.reviewsWrapper}>
          {reviewsLists}
        </ul>
      </section>
  )
}

export default Reviews;