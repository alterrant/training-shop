import ReviewStyle from "./Review.module.css";
import RatingStars from "../common/RatingStars";

const Review = ({review}) => {


  return (
      <li className={ReviewStyle.wrapper}>
        <div className={ReviewStyle.common}>
          <p>{review.name}</p>
          <div className={ReviewStyle.rating}>
            {review.timeStamp}
            <RatingStars rating={review.rating}/>
          </div>
        </div>
        <p className={ReviewStyle.description}>
          {review.description}
        </p>
      </li>
  )
}

export default Review;