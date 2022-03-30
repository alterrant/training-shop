import JoinUsStyle from "./JoinUs.module.css";
import {Messengers} from "../../common/companyInfo/CompanyInfo";
import {useDispatch, useSelector} from "react-redux";
import {resetSubscribeForm, submittingSubscription} from "../../../redux/formsReduser";
import {Field, Form, Formik} from "formik";
import {subscribeValidator} from "../../../encapsulatedCommonLogics/validators";
import Preloader from "../../common/preloader/Preloader";
import {useEffect, useRef} from "react";
import {useLocation} from "react-router-dom";

const JoinUs = () => {
  return (
      <div className={JoinUsStyle.background}>
        <div className={JoinUsStyle.wrapper}>
          <p className={JoinUsStyle.text}>BE IN TOUCH WITH US:</p>
          <FooterSubscribeForm/>
          <div className={JoinUsStyle.messengers}>
            <Messengers/>
          </div>
        </div>
      </div>
  )
}

export default JoinUs;


const FooterSubscribeForm = () => {
  const dispatch = useDispatch();
  const isSubmittingSubscription = useSelector(state => state.forms.isSubmittingSubscription.footerForm);
  const submittingSubscriptionStatus = useSelector(state => state.forms.submittingSubscriptionStatus.footerForm);
  const footerFormRef = useRef();
  const page = useLocation().pathname;

  const initialValues = {
    email: ''
  }
  useEffect(() => {
    footerFormRef.current.resetForm();
  }, [page])

  const onSubmit = async (values, onSubmitProps) => {
    const {resetForm, setErrors} = onSubmitProps;

    try {
      await dispatch(submittingSubscription({
        email: values,
        formName: 'footerForm'
      }));

      resetForm({
        values: {email: ''},
        errors: {email: ''}
      });
    } catch (error) {
      setErrors({submit: error.message});
    } finally {
      setTimeout(() => dispatch(resetSubscribeForm()), 10000);
    }
  }
  return (
      <Formik initialValues={initialValues}
              validate={subscribeValidator}
              onSubmit={onSubmit}
              enableReinitialize={true}
              innerRef={footerFormRef}
      >
        {
          formik => {
            return (
                <Form className={JoinUsStyle.form}>
                  <Field name='email'>
                    {
                      props => {
                        const {meta, field} = props;
                        return (
                           <div className={JoinUsStyle.inputEmail}>
                              <input className={JoinUsStyle.inputEmail} type='email' id='email'
                                     placeholder='Enter your email' {...field}
                                     data-test-id={'footer-mail-field'}/>
                              {meta.touched && meta.error ?
                                  <div className={JoinUsStyle.formError}>{meta.error}</div> : null}
                              {submittingSubscriptionStatus === 'Subscribed'
                                  ? <div className={JoinUsStyle.successSubmitText}>{'Subscribed'}</div>
                                  : <div className={JoinUsStyle.errorSubmitText}>{submittingSubscriptionStatus}</div>}
                           </div>
                        )
                      }
                    }
                  </Field>

                  <button className={JoinUsStyle.submit}
                          type='submit'
                          disabled={formik.errors.email || isSubmittingSubscription}
                          data-test-id={'footer-subscribe-mail-button'}
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