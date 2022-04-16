export const CustomSubscribeError = (props) => {
  const {children, subscribeFormStyle} = props;

  return (
      <div className={subscribeFormStyle.formError}>
        {children}
      </div>
  )
}