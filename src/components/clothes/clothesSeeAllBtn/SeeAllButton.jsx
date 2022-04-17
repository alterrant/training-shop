import SeeAllButtonStyle from "./SeeAllButton.module.css";
import {NavLink} from "react-router-dom";

const SeeAllButton = ({productType}) => {
  return (
      <NavLink to={productType}
               className={SeeAllButtonStyle.link}>
        <button className={SeeAllButtonStyle.button}>
          See All
        </button>
      </NavLink>
  )
}

export default SeeAllButton;