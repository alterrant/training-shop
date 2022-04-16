import {useDispatch, useSelector} from "react-redux";
import {useEffect, useRef} from "react";
import {useLocation} from "react-router-dom";
import {resetSubscribeForm, submittingSubscription} from "../../../redux/formsReduser";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {subscribeValidator} from "../../../encapsulatedCommonLogics/validators";
import JoinUsStyle from "../../footer/JoinUs/JoinUs.module.css";
import Preloader from "../../common/preloader/Preloader";
import SubscribeStyle from "../../main/subscribe/SubscribeOffer.module.css";
import {CustomSubscribeInput} from "./customSubscribeInput/CustomSubscribeInput";
import {CustomSubscribeError} from "./customSubscribeErrorMessage/customSubscribeError";
import classNames from "classnames/bind";

export const SubscribeForm = ({formName}) => {
  const dispatch = useDispatch();

  const isSubmittingSubscription = useSelector(state => state.forms.isSubmittingSubscription[formName]);
  const submittingSubscriptionStatus = useSelector(state => state.forms.submittingSubscriptionStatus[formName]);

  const subscribeFormRef = useRef();
  const page = useLocation().pathname;

  const style = formName === 'mainForm'
      ? SubscribeStyle
      : JoinUsStyle;

  const classNamesBind = classNames.bind(style);

  const initialValues = {
    subscribeEmail: ''
  }

  const onSubmit = async (values, onSubmitProps) => {
    const {setErrors} = onSubmitProps;

    try {
      await dispatch(submittingSubscription({
        subscribeEmail: values,
        formName
      }));

      /* resetForm({
         values: {subscribeEmail: ''},
         errors: {subscribeEmail: ''}
       });*/
    } catch (error) {
      setErrors({submit: error.message});
    } finally {
      setTimeout(() => dispatch(resetSubscribeForm()), 10000);
    }
  }

  useEffect(() => {
    subscribeFormRef.current.resetForm();
  }, [page]);

  useEffect(() => {
    if (submittingSubscriptionStatus === 'Subscribed') subscribeFormRef.current.resetForm();
  }, [submittingSubscriptionStatus]);

  return (
      <Formik initialValues={initialValues}
              validate={subscribeValidator}
              onSubmit={onSubmit}
              enableReinitialize={true}
              innerRef={subscribeFormRef}
      >
        {
          formik => {
            console.log(formik)
            const disableCondition = formik.errors.subscribeEmail || isSubmittingSubscription || !formik.values.subscribeEmail;

            return (
                <Form className={style.form}>
                  <Field
                      name='subscribeEmail'
                      component={CustomSubscribeInput}
                      submittingSubscriptionStatus={submittingSubscriptionStatus}
                      subscribeFormStyle={style}
                      formName={formName}
                  />
                  <ErrorMessage name='subscribeEmail' component={CustomSubscribeError} subscribeFormStyle={style}/>
                  {submittingSubscriptionStatus === 'Subscribed'
                      ? <div className={style.successSubmitText}>{'Subscribed'}</div>
                      : <div className={style.errorSubmitText}>{submittingSubscriptionStatus}</div>}
                  <button className={classNamesBind(disableCondition ? 'disableReviewButton' : 'submit')}
                          type='submit'
                          disabled={disableCondition}
                          data-test-id={formName === 'mainForm'
                              ? 'main-subscribe-mail-button'
                              : 'footer-subscribe-mail-button'}
                  >{isSubmittingSubscription
                      ? <Preloader/>
                      : 'JOIN US'}
                  </button>
                </Form>
            )
          }
        }
      </Formik>
  )
}