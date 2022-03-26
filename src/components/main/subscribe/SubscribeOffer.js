import SubscribeStyle from "./SubscribeOffer.module.css";
import {useForm} from "react-hook-form";
import subscribeWomen from "../../../assets/banner/subscribeWomen.png";
import subscribeMen from "../../../assets/banner/subscribeMen.png";


const SubscribeOffer = ({specialOffer}) => {

  const [descriptionTop, descriptionBot] = specialOffer.description.split('\n');
  const {register, handleSubmit, formState: {errors}} = useForm();
  const onSubmit = () => console.log('emptySubmit');

  return (
      <div className={SubscribeStyle.mask}>
        <img className={SubscribeStyle.women} src={subscribeWomen} alt="subsWomen"/>
        <img className={SubscribeStyle.men} src={subscribeMen} alt="subsMen"/>
        <div className={SubscribeStyle.rectangle}>
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

            <form className={SubscribeStyle.form}
                  onSubmit={handleSubmit(onSubmit)}>
              <input className={SubscribeStyle.inputEmail}
                     placeholder="Enter your email"
                     type="email" {...register("exampleRequired", {required: true})} />
              {errors.exampleRequired && <span>This field is required</span>}
              <button className={SubscribeStyle.submit} type="submit">SUBSCRIBE</button>
            </form>
          </div>
        </div>
      </div>
)
}

export default SubscribeOffer;
