import {useDispatch} from "react-redux";
import classNames from "classnames/bind";
import ReviewsStyle from "../../../product/productDescription/reviews/Reviews.module.css";
import {resetReviewForm} from "../../../../redux/formsReduser";

export const CustomReviewTextarea = (props) => {
  const {field, form, postingReviewStatus = false, placeholder} = props;

  const dispatch = useDispatch();
  const className = classNames.bind(ReviewsStyle);

  const {field, form, postingReviewStatus = false, placeholder} = props;

  return <textarea className={className('textareaReview', {reviewFormError: form.errors.text && form.touched.text})}
                   onClick={() => {
                     if (postingReviewStatus) dispatch(resetReviewForm())
                   }}
                   placeholder={placeholder}
                   data-test-id={'review-text-field'}
                   {...field} />
};