import React from "react";
import PropTypes from "prop-types";

import BannerStyle from "./banner.module.css";

const Banner = ({ tittle, backgroundUrl, altBackground }) => (
  <>
    <div className={BannerStyle.bannerMask}>
      <div className={BannerStyle.bannerContainer}>
        <div className={BannerStyle.bannerWrapper}>
          <p className={BannerStyle.bannerTittle}>{tittle}</p>
        </div>
      </div>
    </div>
    <img
      className={BannerStyle.bannerImage}
      src={backgroundUrl}
      alt={altBackground}
    />
  </>
);

export default Banner;

Banner.propTypes = {
  tittle: PropTypes.string.isRequired,
  backgroundUrl: PropTypes.string.isRequired,
  altBackground: PropTypes.string.isRequired,
};
