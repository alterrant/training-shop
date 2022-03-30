import ReviewsStyle from "./Reviews.module.css";
import RatingReviews from "../../../common/rating/RatingReviews";
import {ReactComponent as AnnotationSVG} from "../../../../assets/SVG/annotation.svg";
import Review from "./Review";
import {useEffect, useState} from "react";
import classNames from 'classnames/bind';
import RatingStars from "../../../common/rating/RatingStars";
import {useDispatch, useSelector} from "react-redux";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {reviewValidator} from "../../../../encapsulatedCommonLogics/validators";
import JoinUsStyle from "../../../footer/JoinUs/JoinUs.module.css";
import Preloader from "../../../common/preloader/Preloader";
import {postingReview, resetReviewForm} from "../../../../redux/formsReduser";
import {changeBodyOverflow} from "../../../../encapsulatedCommonLogics/changeBoodyOverflow";

const Reviews = ({reviews, rating, productId}) => {
  const [isAnnotationOpened, setStatusAnnotation] = useState(false);

  const classNamesBind = classNames.bind(ReviewsStyle);
  const reviewFormStyle = classNamesBind('reviewForm', {'reviewFormActive': isAnnotationOpened});

  const closeShoppingCartHandler = (e) => {
    if (isAnnotationOpened && e.target.className === reviewFormStyle) {

      setStatusAnnotation(false)
    }
  }

  useEffect(() => {
    changeBodyOverflow(!isAnnotationOpened);
  })

  const reviewsLists = reviews.map(item => <Review review={item}
                                                   key={item.id}/>);

  return (
      <section className={ReviewsStyle.wrapper}>
        <section className={reviewFormStyle}
                 onClick={closeShoppingCartHandler}
                 data-test-id={'review-modal'}>
          <div className={ReviewsStyle.reviewFormWrapper}>
            <p>Write a review</p>
            <ReviewForm isAnnotationOpened={isAnnotationOpened}
                        setStatusAnnotation={setStatusAnnotation}
                        productId={productId}/>
          </div>
        </section>
        <h4>REVIEWS</h4>
        <div className={ReviewsStyle.commonInform}>
          <RatingReviews reviewsCounter={reviews.length}
                         rating={rating}/>
          <div className={ReviewsStyle.annotation}
               onClick={() => setStatusAnnotation(!isAnnotationOpened)}
               data-test-id={'review-button'}>
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

const ReviewForm = ({setStatusAnnotation, isAnnotationOpened, productId}) => {
  const dispatch = useDispatch();
  const isPostingReview = useSelector(state => state.forms.isPostingReview);
  const postingReviewStatus = useSelector(state => state.forms.postingReviewStatus);

  const initialValues = {
    name: '',
    text: '',
    rating: '',
  }

  const onSubmit = async (values, onSubmitProps) => {
    const {resetForm, setErrors} = onSubmitProps;

    values.id = productId;

    try {
      await dispatch(postingReview(values));

      resetForm({
        values: {name: '', text: '', rating: '',},
        errors: {name: '', text: '', rating: ''}
      });
    } catch (error) {
      setErrors({submit: error.message});
    } finally {
      //setTimeout(() => dispatch(resetReviewForm()), 3000);
    }
  }

  useEffect(() => {
    if(isAnnotationOpened && postingReviewStatus === 'posting success') {
      setStatusAnnotation(false);
      dispatch(resetReviewForm());
    }
  }, [postingReviewStatus]);

  return (
      <Formik initialValues={initialValues}
              validate={reviewValidator}
              onSubmit={onSubmit}
              enableReinitialize={true}
      >
        {
          formik => {
            return (
                <Form className={ReviewsStyle.form}>
                  <div className={ReviewsStyle.formControl}>
                    <RatingStars rating={formik.values.rating} isRatingInteractive={true}
                                 formControle={formik.setFieldValue}/>
                    <ErrorMessage name='rating' component={CustomErrorMessage}/>
                  </div>
                  <div className={ReviewsStyle.formControl}>
                    <Field name='name'>
                      {
                        props => {
                          const {field} = props;
                          return (
                              <>
                                <input type='input'
                                       {...field}
                                       onClick={() => {
                                         if (postingReviewStatus) dispatch(resetReviewForm())
                                       }}
                                       data-test-id={'review-name-field'}/>
                              </>
                          )
                        }
                      }
                    </Field>
                    <ErrorMessage name='name' component={CustomErrorMessage}/>
                  </div>
                  <div className={ReviewsStyle.formControl}>
                    <Field as='textarea' name='text' component={CustomTextareaComponent} postingReviewStatus={postingReviewStatus}/>
                    <ErrorMessage name='text' component={CustomErrorMessage}/>
                  </div>
                  <div className={ReviewsStyle.formControl}>
                    <button className={ReviewsStyle.submit}
                            type='submit'
                            disabled={formik.errors.email || isPostingReview}
                            data-test-id={'review-submit-button'}
                    >{isPostingReview
                        ? <Preloader/>
                        : 'Send'}
                    </button>
                    {postingReviewStatus
                    && postingReviewStatus !== 'posting success'
                    && <div className={ReviewsStyle.errorSubmitText}>{'Ошибка при отправке отзыва'}</div>}
                  </div>
                </Form>
            )
          }
        }
      </Formik>
  )
}

const CustomErrorMessage = (props) => {
  return (
      <div className={JoinUsStyle.formError}>
        {props.children}
      </div>
  )
}

const CustomTextareaComponent = (props) => {
  const dispatch = useDispatch();
    const {field, postingReviewStatus} = props;

    return <textarea className={ReviewsStyle.textarea}
                     onClick={() => {
                       if (postingReviewStatus) dispatch(resetReviewForm())
                     }}
                     data-test-id={'review-text-field'}
                     {...field} />
};