import AddToCardStyle from './AddToCard.module.css';
import {ReactComponent as ScaleSVG} from "./../../assets/SVG/scale.svg";
import {ReactComponent as ScaleActiveSVG} from "./../../assets/SVG/scaleActive.svg";
import {ReactComponent as HeartSVG} from "./../../assets/SVG/heart.svg";
import {ReactComponent as HeartActiveSVG} from "./../../assets/SVG/heartActive.svg";
import {useState} from "react";

const AddToCard = () => {
  const [isScaleActive, setScaleActive] = useState(false);
  const [isHeartActive, setHeartActive] = useState(false);

  return (
      <div className={AddToCardStyle.wrapper}>
        <p>ADD TO CARD</p>
        <div onClick={() => setScaleActive(!isScaleActive)}>
          {isScaleActive ? <ScaleActiveSVG/> : <ScaleSVG/>}
        </div>
        <div onClick={() => setHeartActive(!isHeartActive)}>
          {isHeartActive ? <HeartActiveSVG/> : <HeartSVG/>}
        </div>
      </div>
  )
}

export default AddToCard;