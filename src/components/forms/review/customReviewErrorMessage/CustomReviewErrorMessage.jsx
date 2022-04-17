import ReviewsStyle from "../../../product/productDescription/reviews/Reviews.module.css";

export const CustomReviewErrorMessage = (props) => {

  return (
      <div className={ReviewsStyle.reviewMessageError}>
        {props.children}
      </div>
  )
}