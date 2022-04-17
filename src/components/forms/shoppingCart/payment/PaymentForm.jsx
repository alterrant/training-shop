import {useStableDispatch} from "../../../../hooks/useRedux";
import PaymentFormStyle from "./PaymentForm.module.css";
import {setPaymentInfo, submittingShoppingCard} from "../../../../redux/shoppingCartReducer";
import React, {useEffect, useRef} from "react";
import {ReactComponent as PayPalSVG} from "./../../../../assets/SVG/paypal.svg";
import {ReactComponent as VisaSVG} from "./../../../../assets/SVG/visa.svg";
import {ReactComponent as MasterCardSVG} from "./../../../../assets/SVG/mastercard.svg";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {CustomShoppingCartRadio} from "../customShoppingCartRadio/CustomShoppingCartRadio";
import Partition from "../../../common/partition/Partition";
import ShoppingCartFooter from "../../../shoppingCart/content/footer/ShoppingCartFooter";
import PayPalMethod from "./paymentMethods/payPal/PayPalMethod";
import DebitCardMethod from "./paymentMethods/debitCards/DebitCardMethod";
import DeliveryInfoFormStyle from "../deliveryInfo/DeliveryInfoForm.module.css";
import {useSelector} from "react-redux";

export const PaymentForm = (props) => {
  const {totalCartPrice, navigationStage, setNavigationStage} = props;

  const dispatch = useStableDispatch();
  const paymentFormToggle = useSelector(state => state.shoppingCart.paymentFormToggle);
  const statePaymentInfo = useSelector(state => state.shoppingCart.paymentSummary);

  const initialPaymentInfo = Object.assign({totalPrice: totalCartPrice}, statePaymentInfo, {paymentMethod: 'Visa'});

  const paymentFormRef = useRef();

  const radioOption = [
    {key: 'rOption1', value: 'PayPal', svg: PayPalSVG},
    {key: 'rOption2', value: 'Visa', svg: VisaSVG},
    {key: 'rOption3', value: 'MasterCard', svg: MasterCardSVG},
    {key: 'rOption4', value: 'Cash'},
  ]

  const onSubmit = (values) => {
    const paymentSummary = {
      totalPrice: values.totalPrice
    };

    if (values.paymentMethod === 'PayPal') {
      paymentSummary.paymentMethod = values.paymentMethod;
      paymentSummary.cashEmail = values.cashEmail;
    }
    if (values.paymentMethod === 'Visa' || values.paymentMethod === 'MasterCard') {
      paymentSummary.paymentMethod = 'card';
      paymentSummary.card = values.card;
      paymentSummary.cardDate = values.cardDate;
      paymentSummary.cardCVV = values.cardCVV;
    }
    if (values.paymentMethod === 'Cash') {
      paymentSummary.paymentMethod = 'cash';
    }

    dispatch(setPaymentInfo(paymentSummary));
    dispatch(submittingShoppingCard());
  }

  useEffect(() => {
    paymentFormRef.current.resetForm();
  }, [paymentFormToggle])

  const radioButtons = radioOption.map(radioButton => {
    return (
        <React.Fragment key={radioButton.key}>
          <label className={PaymentFormStyle.radioLabelFormControl}>
            <Field type='radio' name='paymentMethod' value={radioButton.value} component={CustomShoppingCartRadio}/>
            <span>
                {
                  getPaymentSVG(radioButton.value)
                }
            </span>
          </label>
          <Partition/>
        </React.Fragment>
    )
  });

  return (
      <Formik initialValues={initialPaymentInfo}
              onSubmit={onSubmit}
              enableReinitialize={true}
              innerRef={paymentFormRef}
      >
        {
          formik => {
            return (
                <Form className={PaymentFormStyle.form}>
                  <div>
                    <div className={PaymentFormStyle.radioFormControl}>
                      <p>Method of payments</p>
                      <Partition/>
                      {radioButtons}
                      <ErrorMessage name='paymentMethod'/>
                    </div>
                    <div className={DeliveryInfoFormStyle.formContent}>
                      {
                        getPaymentMethod(formik.values.paymentMethod, formik)
                      }
                    </div>
                  </div>
                  <ShoppingCartFooter totalCartPrice={totalCartPrice}
                                      navigationStage={navigationStage}
                                      setNavigationStage={setNavigationStage}
                                      isCashMethod={formik.values.paymentMethod === 'Cash'}
                                      summaryInfo={formik.values}/>
                </Form>
            )
          }
        }
      </Formik>
  )
}

const getPaymentSVG = (value) => {
  switch (value) {
    case 'PayPal': {
      return <PayPalSVG />
    }
    case 'Visa': {
      return <VisaSVG />
    }
    case 'MasterCard': {
      return <MasterCardSVG />
    }
    default:
      return 'Cash'
  }
}

const getPaymentMethod = (value, formik) => {
  switch (value) {
    case 'PayPal': {
      return <PayPalMethod formik={formik} />
    }
    case 'Visa':
    case 'MasterCard': {
      return <DebitCardMethod formik={formik}/>
    }
    default:
      return null
  }
}