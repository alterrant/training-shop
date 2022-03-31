import NavigationStyle from "./Navigation.module.css";
import {ReactComponent as ShareSVG} from "../../../../assets/SVG/share.svg";
import {NavLink, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";

const Navigation = () => {

  const product = useSelector(state => state.product.productInfo);
  const addresses = useLocation().pathname.split("/").filter(item => item !== "");

  const address = addresses.map((item, index) => {
        const linkName = (item === product.id) ? product.name : item;
        const registeredLinkName = linkName?.[0].toUpperCase() + linkName.slice(1);

        let counter = 0;
        const link = (addresses, item, index) => {
          if (index === counter) return `/${item}`;

          counter++;

          return `/${addresses[index-counter]}${link(addresses, item, index)}`;
        }
        return <NavLink className={NavigationStyle.link} to={link(addresses, item, index)}
                        key={index}>{` ► ${registeredLinkName}`}</NavLink>
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