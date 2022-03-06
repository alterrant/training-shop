import ReviewStyle from "./Review.module.css";
import RatingStars from "../common/RatingStars";

const Review = ({review}) => {

  if (review.length === 0) return <></>

  return (
      <li className={ReviewStyle.wrapper}>
        <div className={ReviewStyle.common}>
          <p>{review.name}</p>
          <div className={ReviewStyle.rating}>
            {/*timeStamp убрали для простоты
            {review.timeStamp}*/}
            <RatingStars rating={review.rating}/>
          </div>
        </div>
        <p className={ReviewStyle.description}>
          {review.text}
        </p>
      </li>
  )
}

export default Review;