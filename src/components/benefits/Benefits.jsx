import BenefitsStyle from './Benefits.module.css';
import Benefit from "./Benefit";
import {BENEFITS} from "../../constants/benefits";

export const Benefits = () => {

  const benefits = BENEFITS.map(item => <li className={BenefitsStyle.list} key={item.id}><Benefit item={item}/></li>)

  return (
      <section className={BenefitsStyle.container}>
        <ul className={BenefitsStyle.wrapper}>
          {benefits}
        </ul>
      </section>
  )
}

export default Benefits;