import {useDispatch} from "react-redux";
import classNames from "classnames/bind";
import ReviewsStyle from "../../../Product/ProductDescription/reviews/Reviews.module.css";
import {resetReviewForm} from "../../../../redux/formsReduser";

export const CustomReviewInput = (props) => {
  const dispatch = useDispatch();
  const className = classNames.bind(ReviewsStyle);

  const {field, form, postingReviewStatus = false, placeholder} = props;

  return (
      <input type='input'
             className={className('inputReview', {reviewFormError: form.errors.name && form.touched.name})}
             {...field}
             onClick={() => {
               if (postingReviewStatus) dispatch(resetReviewForm())
             }}
             placeholder={placeholder}
             data-test-id={'review-name-field'}/>
  )
}