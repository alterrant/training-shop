import SubscribeStyle from "./SubscribeOffer.module.css";
import subscribeWomen from "../../../assets/banner/subscribeWomen.png";
import subscribeMen from "../../../assets/banner/subscribeMen.png";
import {Field, Form, Formik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {resetSubscribeForm, submittingSubscription} from "../../../redux/formsReduser";
import Preloader from "../../common/preloader/Preloader";
import {subscribeValidator} from "../../../encapsulatedCommonLogics/validators";

const SubscribeOffer = ({specialOffer}) => {
  const [descriptionTop, descriptionBot] = specialOffer.description.split('\n');

  return (
      <div className={SubscribeStyle.mask}>
        <img className={SubscribeStyle.women} src={subscribeWomen} alt="subsWomen"/>
        <img className={SubscribeStyle.men} src={subscribeMen} alt="subsMen"/>
        <div className={SubscribeStyle.rectangle} >
          <div className={SubscribeStyle.wrapper}>
            <div className={SubscribeStyle.tittle}>
              {specialOffer.tittle}
            </div>
            <div className={SubscribeStyle.description}>
              {descriptionTop}
              <br/>
              {descriptionBot}
              {specialOffer.discount && <span>{specialOffer.discount}</span>}
            </div>
            <AnyForm/>
          </div>
        </div>
      </div>
  )
}

export default SubscribeOffer;

const AnyForm = () => {
  const dispatch = useDispatch();
  const isSubmittingSubscription = useSelector(state => state.forms.isSubmittingSubscription.mainForm);
  const submittingSubscriptionStatus = useSelector(state => state.forms.submittingSubscriptionStatus.mainForm);

  const initialValues = {
    email: ''
  }

  const onSubmit = async (values, onSubmitProps) => {
    const {resetForm, setErrors} = onSubmitProps;

    try {
      await dispatch(submittingSubscription({
        email: values,
        formName: 'mainForm'
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
      >
        {
          formik => {
            return (
                <Form className={SubscribeStyle.form}>
                  <Field name='email'>
                    {
                      props => {
                        const {meta, field} = props;
                        return (
                            <div>
                              <input className={SubscribeStyle.inputEmail} type='email' id='email'
                                     placeholder='Enter your email' {...field}
                                     data-test-id={'main-subscribe-mail-field'}/>
                              {meta.touched && meta.error ?
                                  <div className={SubscribeStyle.formError}>{meta.error}</div> : null}
                              {submittingSubscriptionStatus === 'Subscribed'
                                  ? <div className={SubscribeStyle.successSubmitText}>{'Subscribed'}</div>
                                  : <div className={SubscribeStyle.errorSubmitText}>{submittingSubscriptionStatus}</div>}
                            </div>
                        )
                      }
                    }
                  </Field>

                  <button className={SubscribeStyle.submit}
                          type='submit'
                          disabled={formik.errors.email || isSubmittingSubscription}
                          data-test-id={'main-subscribe-mail-button'}
                  >{isSubmittingSubscription
                      ? <Preloader/>
                      : 'SUBSCRIBE'}
                  </button>
                </Form>
            )
          }
        }
      </Formik>
  )
}