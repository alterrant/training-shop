import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { ErrorMessage, Field, Form, Formik } from "formik";

import {
  setPaymentInfo,
  submittingShoppingCard,
} from "../../../../redux/shopping-cart-reducer";

import CustomShoppingCartRadio from "../custom-shopping-cart-radio/custom-shopping-cart-radio";
import Partition from "../../../common/partition/partition";
import ShoppingCartFooter from "../../../shoppingCart/content/footer/shopping-cart-footer";
import PayPalMethod from "./payment-methods/payPal/paypal-method";
import DebitCardMethod from "./payment-methods/debit-cards/debit-card-method";
import { PAYMENT } from "../../../../constants/shoppingCart";
import { PAYMENT_RADIO_OPTIONS } from "../../../../constants/radio-options";

import { ReactComponent as PayPalSVG } from "../../../../assets/SVG/paypal.svg";
import { ReactComponent as VisaSVG } from "../../../../assets/SVG/visa.svg";
import { ReactComponent as MasterCardSVG } from "../../../../assets/SVG/mastercard.svg";

import DeliveryInfoFormStyle from "../delivery-info/delivery-info-form.module.css";
import PaymentFormStyle from "./payment-form.module.css";

const PaymentForm = ({
  totalCartPrice,
  navigationStage,
  setNavigationStage,
}) => {
  const dispatch = useDispatch();
  const { paymentFormToggle } = useSelector((state) => state.shoppingCart);
  const { paymentSummary: statePaymentInfo } = useSelector(
    (state) => state.shoppingCart.paymentSummary
  );

  const initialPaymentInfo = Object.assign(
    { totalPrice: totalCartPrice },
    statePaymentInfo,
    { paymentMethod: PAYMENT.visa }
  );

  const paymentFormRef = useRef();

  const onSubmit = (values) => {
    const paymentSummary = {
      totalPrice: values.totalPrice,
    };

    if (values.paymentMethod === PAYMENT.paypal) {
      paymentSummary.paymentMethod = values.paymentMethod;
      paymentSummary.cashEmail = values.cashEmail;
    }
    if (
      values.paymentMethod === PAYMENT.visa ||
      values.paymentMethod === PAYMENT.mastercard
    ) {
      paymentSummary.paymentMethod = "card";
      paymentSummary.card = values.card;
      paymentSummary.cardDate = values.cardDate;
      paymentSummary.cardCVV = values.cardCVV;
    }
    if (values.paymentMethod === PAYMENT.cash) {
      paymentSummary.paymentMethod = "cash";
    }

    dispatch(setPaymentInfo(paymentSummary));
    dispatch(submittingShoppingCard());
  };

  useEffect(() => {
    paymentFormRef.current.resetForm();
  }, [paymentFormToggle]);

  const radioButtons = PAYMENT_RADIO_OPTIONS.map((radioButton) => {
    return (
      <React.Fragment key={radioButton.key}>
        <label className={PaymentFormStyle.radioLabelFormControl}>
          <Field
            type="radio"
            name="paymentMethod"
            value={radioButton.value}
            component={CustomShoppingCartRadio}
          />
          <span>{getPaymentSVG(radioButton.value)}</span>
        </label>
        <Partition />
      </React.Fragment>
    );
  });

  return (
    <Formik
      initialValues={initialPaymentInfo}
      onSubmit={onSubmit}
      enableReinitialize
      innerRef={paymentFormRef}
    >
      {(formik) => {
        return (
          <Form className={PaymentFormStyle.form}>
            <div>
              <div className={PaymentFormStyle.radioFormControl}>
                Method of payments
                <Partition />
                {radioButtons}
                <ErrorMessage name="paymentMethod" />
              </div>
              <div className={DeliveryInfoFormStyle.formContent}>
                {getPaymentMethod(formik.values.paymentMethod, formik)}
              </div>
            </div>
            <ShoppingCartFooter
              totalCartPrice={totalCartPrice}
              navigationStage={navigationStage}
              setNavigationStage={setNavigationStage}
              isCashMethod={formik.values.paymentMethod === PAYMENT.cash}
              summaryInfo={formik.values}
            />
          </Form>
        );
      }}
    </Formik>
  );
};

export default PaymentForm;

const getPaymentSVG = (value) => {
  switch (value) {
    case PAYMENT.paypal: {
      return <PayPalSVG />;
    }
    case PAYMENT.visa: {
      return <VisaSVG />;
    }
    case PAYMENT.mastercard: {
      return <MasterCardSVG />;
    }
    default:
      return PAYMENT.cash;
  }
};

const getPaymentMethod = (value, formik) => {
  switch (value) {
    case PAYMENT.paypal: {
      return <PayPalMethod formik={formik} />;
    }
    case PAYMENT.visa:
    case PAYMENT.mastercard: {
      return <DebitCardMethod formik={formik} />;
    }
    default:
      return null;
  }
};

PaymentForm.propTypes = {
  totalCartPrice: PropTypes.number,
  navigationStage: PropTypes.string,
  setNavigationStage: PropTypes.func,
};
