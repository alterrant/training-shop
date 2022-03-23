import ErrorStyle from './Error.module.css';

const Error = ({errorMessage}) => {
  return (
      <li className={ErrorStyle.wrapper} data-test-id={'error'}>
        <div className={ErrorStyle.text}>
          {errorMessage}
        </div>
      </li>
  )
}

export default Error;