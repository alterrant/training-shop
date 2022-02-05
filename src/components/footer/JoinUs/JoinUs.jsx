import {useForm} from "react-hook-form";
import JoinUsStyle from "./JoinUs.module.css";
import {Messengers} from "../../common/CompanyInfo";

const JoinUs = () => {
  const {register, handleSubmit, formState: {errors}} = useForm();
  const onSubmit = () => console.log('emptySubmit');

  return (
      <div className={JoinUsStyle.wrapper}>
        <p className={JoinUsStyle.text}>BE IN TOUCH WITH US:</p>

        <form className={JoinUsStyle.form}
              onSubmit={handleSubmit(onSubmit)}>
          <input className={JoinUsStyle.inputEmail}
                 placeholder="Enter your email"
                 type="email" {...register("exampleRequired", {required: true})} />
          {errors.exampleRequired && <span>This field is required</span>}
          <button className={JoinUsStyle.submit} type="submit">JOIN US</button>
        </form>

        <div className={JoinUsStyle.messengers}>
          <Messengers/>
        </div>
      </div>
  )
}

export default JoinUs;
