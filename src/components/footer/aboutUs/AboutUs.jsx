import AboutUsStyle from "./AboutUs.module.css";
import FooterInfo from "./footerInfo/FooterInfo";
import {FOOTERNAVBAR} from "../../../constants/menuConst";
import {getNavLinks} from "../../../encapsulatedCommonLogics/getNavLinks";

const AboutUs = () => {

  const footerLinksLists = FOOTERNAVBAR.map((item) => {
        const {tittle, description} = getNavLinks(item);

        return <FooterInfo key={tittle}
                           links={description}
                           tittle={tittle}/>
      }
  )

  return (
      <div className={AboutUsStyle.container}>
        <ul className={AboutUsStyle.wrapper}>
          {footerLinksLists}
        </ul>
      </div>
  )
}
export default AboutUs;