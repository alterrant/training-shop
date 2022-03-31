import ReviewsStyle from "../../../Product/ProductDescription/reviews/Reviews.module.css";

export const CustomReviewErrorMessage = (props) => {
  return (
      <div className={ReviewsStyle.reviewMessageError}>
        {props.children}
      </div>
  )
}