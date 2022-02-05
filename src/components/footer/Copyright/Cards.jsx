import CardsStyle from "./Cards.module.css";
import { ReactComponent as Strip} from "./../../../assets/SVG/Stripe.svg";
import { ReactComponent as AES} from "./../../../assets/SVG/AES256.svg";
import { ReactComponent as PayPal} from "./../../../assets/SVG/Paypal.svg";
import { ReactComponent as Visa} from "./../../../assets/SVG/Visa.svg";
import { ReactComponent as MasterCard} from "./../../../assets/SVG/Mastercard.svg";
import { ReactComponent as Discover} from "./../../../assets/SVG/Discover.svg";
import { ReactComponent as AmericanExpress} from "./../../../assets/SVG/American-express.svg";

const Cards = () => {
  return (
      <ul className={ CardsStyle.wrapper }>
        <li>
          <Strip/>
        </li>
        <li>
          <AES/>
        </li>
        <li>
          <PayPal/>
        </li>
        <li>
          <Visa/>
        </li>
        <li>
          <MasterCard/>
        </li>
        <li>
          <Discover/>
        </li>
        <li>
          <AmericanExpress/>
        </li>
      </ul>
  )
}

export default Cards;