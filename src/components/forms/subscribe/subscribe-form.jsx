import { React, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import PropTypes from "prop-types";
import classNames from "classnames/bind";

import {
  resetSubscribeForm,
  submittingSubscription,
} from "../../../redux/forms-reduser";
import { subscribeValidator } from "../../../encapsulated-common-logics/validators";
import Preloader from "../../common/preloader/preloader";
import CustomSubscribeInput from "./custom-subscribe-input/custom-subscribe-input";
import CustomSubscribeError from "./custom-subscribe-error-message/custom-subscribe-error";

import SubscribeStyle from "../../main/subscribe/subscribe-offer/subscribe-offer.module.css";
import JoinUsStyle from "../../footer/join-us/join-us.module.css";

const SubscribeForm = ({ formName }) => {
  const dispatch = useDispatch();

  const isSubmittingSubscription = useSelector(
    (state) => state.forms.isSubmittingSubscription[formName]
  );
  const submittingSubscriptionStatus = useSelector(
    (state) => state.forms.submittingSubscriptionStatus[formName]
  );

  const subscribeFormRef = useRef();
  const page = useLocation().pathname;

  const style = formName === "mainForm" ? SubscribeStyle : JoinUsStyle;

  const classNamesBind = classNames.bind(style);

  const initialValues = {
    subscribeEmail: "",
  };

  const onSubmit = async (values, onSubmitProps) => {
    const { setErrors } = onSubmitProps;

    try {
      await dispatch(
        submittingSubscription({
          subscribeEmail: values,
          formName,
        })
      );
      /* resetForm({
         values: {subscribeEmail: ''},
         errors: {subscribeEmail: ''}
       }); */
    } catch (error) {
      setErrors({ submit: error.message });
    } finally {
      setTimeout(() => dispatch(resetSubscribeForm()), 10000);
    }
  };

  useEffect(() => {
    subscribeFormRef.current.resetForm();
  }, [page]);

  useEffect(() => {
    if (submittingSubscriptionStatus === "Subscribed")
      subscribeFormRef.current.resetForm();
  }, [submittingSubscriptionStatus]);

  return (
    <Formik
      initialValues={initialValues}
      validate={subscribeValidator}
      onSubmit={onSubmit}
      enableReinitialize
      innerRef={subscribeFormRef}
    >
      {(formik) => {
        const disableCondition =
          formik.errors.subscribeEmail ||
          isSubmittingSubscription ||
          !formik.values.subscribeEmail;

        return (
          <Form className={style.form}>
            <Field
              name="subscribeEmail"
              component={CustomSubscribeInput}
              submittingSubscriptionStatus={submittingSubscriptionStatus}
              subscribeFormStyle={style}
              formName={formName}
            />
            <ErrorMessage
              name="subscribeEmail"
              component={CustomSubscribeError}
              subscribeFormStyle={style}
            />
            {submittingSubscriptionStatus === "Subscribed" ? (
              <div className={style.successSubmitText}>Subscribed</div>
            ) : (
              <div className={style.errorSubmitText}>
                {submittingSubscriptionStatus}
              </div>
            )}
            <button
              className={classNamesBind(
                disableCondition ? "disableReviewButton" : "submit"
              )}
              type="submit"
              disabled={disableCondition}
              data-test-id={
                formName === "mainForm"
                  ? "main-subscribe-mail-button"
                  : "footer-subscribe-mail-button"
              }
            >
              {isSubmittingSubscription ? <Preloader /> : "JOIN US"}
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default SubscribeForm;

SubscribeForm.propTypes = {
  formName: PropTypes.string.isRequired,
};
