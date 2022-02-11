import ReviewsStyle from "./Reviews.module.css";

const Reviews = ({reviewsCount}) => {

  return (
      <p className={ReviewsStyle.reviews}>
        {`${reviewsCount} Reviews`}
      </p>
  )
}

export default Reviews;