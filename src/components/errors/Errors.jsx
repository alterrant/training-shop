import Error from "./error/Error";
import ErrorsStyle from "./Errors.module.css";

const Errors = ({currentErrors}) => {
  const errors = currentErrors.map(error => <Error errorMessage={error} key={error}/>)

  return (
      <>
        {<ul className={ErrorsStyle.wrapper}>
          {errors}
        </ul>}
      </>
  )
}

export default Errors;