import BannersStyle from './Banners.module.css';
import banner1 from '../../assets/banner/banner1.png';
import banner2 from '../../assets/banner/banner2.png';
import banner3 from '../../assets/banner/banner3.png';
import banner4 from '../../assets/banner/banner4.png';
import {ReactComponent as LeftArrow} from "../../assets/SVG/leftArrow.svg";
import {ReactComponent as RightArrow} from "../../assets/SVG/rightArrow.svg";

const Banners = () => {
  return (
      <article className={BannersStyle.wrapper}>
        <div className={BannersStyle.item1}>
          <div className={BannersStyle.bigBannerMask}>
            <div className={BannersStyle.bigBannerContainer}>
              <LeftArrow/>
              <div className={BannersStyle.bigBannerWrapper}>
                <p className={BannersStyle.bigBannerText}>
                  BANNER
                </p>
                <p className={BannersStyle.bigBannerTitle}>
                  YOUR TITLE TEXT
                </p>
              </div>
              <RightArrow/>
            </div>
          </div>
          <img className={BannersStyle.bigBannerImage} src={banner1} alt="banner1"/>
        </div>
        <div className={BannersStyle.item2}>
          <div className={BannersStyle.bannerMask}>
            <div className={BannersStyle.bannerContainer}>
              <div className={BannersStyle.bannerWrapper}>
                <p className={BannersStyle.bannerTitle}>
                  WOMEN
                </p>
              </div>
            </div>
          </div>
          <img className={BannersStyle.bannerImage} src={banner2} alt="banner2"/>
        </div>
        <div className={BannersStyle.item3}>
          <div className={BannersStyle.bannerMask}>
            <div className={BannersStyle.bannerContainer}>
              <div className={BannersStyle.bannerWrapper}>
                <p className={BannersStyle.bannerTitle}>
                  MEN
                </p>
              </div>
            </div>
          </div>
          <img className={BannersStyle.bannerImage} src={banner3} alt="banner3"/>
        </div>
        <div className={BannersStyle.item4}>
          <div className={BannersStyle.bannerMask}>
            <div className={BannersStyle.bannerContainer}>
              <div className={BannersStyle.longBannerWrapper}>
                <p className={BannersStyle.bannerTitle}>
                  ACCESSORIES
                </p>
              </div>
            </div>
          </div>
          <img className={BannersStyle.bannerImage} src={banner4} alt="banner4"/>
        </div>
      </article>
  )
}

export default Banners;