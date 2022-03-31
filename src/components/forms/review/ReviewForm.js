import {useDispatch, useSelector} from "react-redux";
import {useEffect, useRef} from "react";
import {postingReview, resetReviewForm} from "../../../redux/formsReduser";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {reviewValidator} from "../../../encapsulatedCommonLogics/validators";
import ReviewsStyle from "../../Product/ProductDescription/reviews/Reviews.module.css";
import RatingStars from "../../common/rating/RatingStars";
import Preloader from "../../common/preloader/Preloader";
import {CustomReviewErrorMessage} from "./customReviewErrorMessage/CustomReviewErrorMessage";
import {CustomReviewInput} from "./customReviewInput/CustomReviewInput";
import {CustomReviewTextarea} from "./customReviewTextarea/CustomReviewTextarea";
import classNames from "classnames/bind";

export const ReviewForm = ({setStatusAnnotation, isAnnotationOpened, productId}) => {
  const dispatch = useDispatch();
  const isPostingReview = useSelector(state => state.forms.isPostingReview);
  const postingReviewStatus = useSelector(state => state.forms.postingReviewStatus);
  const reviewFormRef = useRef();
  const classNamesBind = classNames.bind(ReviewsStyle);

  const initialValues = {
    name: '',
    text: '',
    rating: 1,
  }

  const onSubmit = async (values, onSubmitProps) => {
    const {setErrors} = onSubmitProps;

    values.id = productId;

    try {
      await dispatch(postingReview(values));

      /*если нужно будет чистить форму после отправки
      resetForm({
        values: {name: '', text: '', rating: '1',},
        errors: {name: '', text: '', rating: ''}
      });*/
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

  useEffect(() => {
    if(!isAnnotationOpened) {
      reviewFormRef.current.resetForm();
    }
  }, [isAnnotationOpened]);

  return (
      <Formik initialValues={initialValues}
              validate={reviewValidator}
              onSubmit={onSubmit}
              enableReinitialize={true}
              innerRef={reviewFormRef}
      >
        {
          formik => {
            const disableCondition = formik.errors.email || isPostingReview || !formik.values.name || !formik.values.text;

            return (
                <Form className={ReviewsStyle.form}>
                  <div className={ReviewsStyle.formControl}>
                    <RatingStars rating={formik.values.rating} isRatingInteractive={true}
                                 formControle={formik.setFieldValue}/>
                    <ErrorMessage name='rating' component={CustomReviewErrorMessage}/>
                  </div>
                  <div className={ReviewsStyle.formControl}>
                    <Field name='name' component={CustomReviewInput} placeholder='Name' postingReviewStatus={postingReviewStatus}/>
                    <ErrorMessage name='name' component={CustomReviewErrorMessage}/>
                  </div>
                  <div className={ReviewsStyle.formControl}>
                    <Field as='textarea' name='text' component={CustomReviewTextarea} placeholder='Comment' postingReviewStatus={postingReviewStatus}/>
                    <ErrorMessage name='text' component={CustomReviewErrorMessage}/>
                  </div>
                  <div className={ReviewsStyle.formControl}>
                    <button className={classNamesBind(disableCondition ? 'disableReviewButton' : 'submit')}
                            type='submit'
                            disabled={disableCondition}
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