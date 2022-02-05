import MessengersStyle from "./Messengers.module.css";
import { ReactComponent as FaceBook } from './../../../assets/SVG/facebook.svg'
import { ReactComponent as Twitter } from './../../../assets/SVG/twitter.svg'
import { ReactComponent as Instagram } from './../../../assets/SVG/instagram.svg'
import { ReactComponent as Pinterest } from './../../../assets/SVG/pinterest.svg'

const Messengers = () => {
  return (
      <ul className={ MessengersStyle.wrapper }>
        <li>
          <FaceBook/>
        </li>
        <li>
          <Twitter/>
        </li>
        <li>
          <Instagram/>
        </li>
        <li>
          <Pinterest/>
        </li>
      </ul>
  )
}

export default Messengers;