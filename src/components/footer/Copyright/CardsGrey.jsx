import CardsStyle from "./CardsGrey.module.css";
import { ReactComponent as StripGrey} from "../../../assets/SVG/stripeGrey.svg";
import { ReactComponent as AESGrey} from "../../../assets/SVG/AES256Grey.svg";
import { ReactComponent as PayPalGrey} from "../../../assets/SVG/paypalGrey.svg";
import { ReactComponent as VisaGrey} from "../../../assets/SVG/visaGrey.svg";
import { ReactComponent as MasterCardGrey} from "../../../assets/SVG/mastercardGrey.svg";
import { ReactComponent as DiscoverGrey} from "../../../assets/SVG/discoverGrey.svg";
import { ReactComponent as AmericanExpressGrey} from "../../../assets/SVG/americanExpressGrey.svg";

const CardsGrey = () => {
  return (
      <ul className={ CardsStyle.wrapper }>
        <li>
          <StripGrey/>
        </li>
        <li>
          <AESGrey/>
        </li>
        <li>
          <PayPalGrey/>
        </li>
        <li>
          <VisaGrey/>
        </li>
        <li>
          <MasterCardGrey/>
        </li>
        <li>
          <DiscoverGrey/>
        </li>
        <li>
          <AmericanExpressGrey/>
        </li>
      </ul>
  )
}

export default CardsGrey;