import SubscribeStyle from "./Subscribe.module.css";
import SubscribeOffer from "./SubscribeOffer";
import {SPECIAL_BENEFIT} from "../../../constants/benefits";

const Subscribe = () => {
  return (
      <section className={SubscribeStyle.wrapper}>
        <SubscribeOffer specialOffer={SPECIAL_BENEFIT}/>
      </section>
  )
}

export default Subscribe;