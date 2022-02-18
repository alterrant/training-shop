import BannerStyle from './Banner.module.css';

const Banner = ({tittle, backgroundUrl, altBackground}) => {
  return (
      <>
          <div className={BannerStyle.bannerMask}>
            <div className={BannerStyle.bannerContainer}>
              <div className={BannerStyle.bannerWrapper}>
                <p className={BannerStyle.bannerTittle}>
                  {tittle}
                </p>
              </div>
            </div>
          </div>
          <img className={BannerStyle.bannerImage} src={backgroundUrl} alt={altBackground}/>
      </>
  )
}

export default Banner;