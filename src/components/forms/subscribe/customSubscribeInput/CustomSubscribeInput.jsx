import classNames from "classnames/bind";

export const CustomSubscribeInput = (props) => {
  const {field, form, subscribeFormStyle, formName} = props;

  const className = classNames.bind(subscribeFormStyle);

  return (
      <div className={subscribeFormStyle.inputEmailWrapper}>
        <input className={className('inputEmail', {inputEmailError: form.errors.email})}
               type='email'
               id='subscribeEmail'
               placeholder='Enter your email'
               {...field}
               data-test-id={formName === 'mainForm'
                   ? 'main-subscribe-mail-field'
                   : 'footer-mail-field'}/>
      </div>
  )
}