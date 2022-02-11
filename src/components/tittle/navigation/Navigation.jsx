import NavigationStyle from "./Navigation.module.css";
import {ReactComponent as ShareSVG} from "../../../assets/SVG/share.svg";
import {NavLink, useLocation} from "react-router-dom";

const Navigation = () => {

  const addresses = useLocation().pathname.split("/").filter(item => item !== "");
  const address = addresses.map((item, index) => {
        const addressFirstLetter = item[0].toUpperCase() + item.slice(1);

        return <NavLink className={NavigationStyle.link} to={`/${item}`} key={index}>{` ► ${addressFirstLetter}`}</NavLink>
      }
  )


  return (
      <div className={NavigationStyle.wrapper}>
        <div>
          <NavLink className={NavigationStyle.link} to={"/"}>
            Home
          </NavLink>
          {address}
        </div>
        <div className={NavigationStyle.share}>
          <ShareSVG/>
          <p className={NavigationStyle.shareText}>
            Share
          </p>
        </div>
      </div>
  )
}

export default Navigation;