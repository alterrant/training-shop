import SiteToolsStyle from "./SiteTools.module.css";
import { ReactComponent as SearchSVG} from "./../../../assets/SVG/search.svg";
import { ReactComponent as GlobeSVG} from "./../../../assets/SVG/globe.svg";
import { ReactComponent as ProfileSVG} from "./../../../assets/SVG/user.svg";
import { ReactComponent as BagSVG} from "./../../../assets/SVG/shopping-bag.svg";

const SiteTools = () => {
  return (
      <ul className={SiteToolsStyle.wrapper}>
        <li><SearchSVG/></li>
        <li><GlobeSVG/></li>
        <li><ProfileSVG/></li>
        <li><BagSVG/></li>
      </ul>
  )
}

export default SiteTools;