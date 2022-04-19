import React, { useState } from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Controller, Navigation } from "swiper";

import useWindowDimensions from "../../../hooks/useWindowDimensions";
import getDirection from "../../../encapsulatedCommonLogics/swipersLogic";

import { ReactComponent as Pointer } from "../../../assets/SVG/pointer.svg";
import { ReactComponent as LeftArrow } from "../../../assets/SVG/leftArrow.svg";
import { ReactComponent as RightArrow } from "../../../assets/SVG/rightArrow.svg";

import ProductStyle from "../Product.module.css";
import BannersStyle from "../../main/banners/Banners.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";

const ProductImages = ({ product, selectedCategoriesProduct }) => {
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);

  const { width } = useWindowDimensions();
  // const productPhotos = useSelector(state => state.product.productInfo.photos);
  const getProductImages = (product, selectedColor) => {
    return product.images.filter((item) => item.color === selectedColor);
  };

  const productPhotos = getProductImages(
    product,
    selectedCategoriesProduct.color
  );

  const productPhotosList = productPhotos.map((item) => (
    <SwiperSlide key={item.id}>
      {/* {Array.isArray(item.images) ?
            <img className={ClothesStyle.img} src={`https://training.cleverland.by/shop${item.images[0].url}`}
                 alt={item.image}/>
            :
            <img className={ClothesStyle.img} src={item.images}
                 alt={item.image}/>
        } */}

      <img
        className={ProductStyle.imgWrapper}
        src={`https://training.cleverland.by/shop${item.url}`}
        alt={`product ${item.color}`}
        key={item.id}
      />
    </SwiperSlide>
  ));
  const imagesList = productPhotos.map((item) => (
    <SwiperSlide key={`mainPhoto ${item.id}`}>
      <img
        className={BannersStyle.bigBannerImage}
        src={`https://training.cleverland.by/shop${item.url}`}
        alt={`product ${item.color}`}
      />
    </SwiperSlide>
  ));

  return (
    <div className={ProductStyle.wrapper}>
      <div className={ProductStyle.productAngles}>
        <div className={ProductStyle.pointers}>
          <div className="topSliderArrow">
            <Pointer />
          </div>
          <div className="bottomSliderArrow">
            <Pointer />
          </div>
        </div>
        <div className={ProductStyle.imagesWrapper}>
          <Swiper
            onSwiper={setFirstSwiper}
            controller={{ control: secondSwiper }}
            modules={[Navigation, Controller]}
            spaceBetween={16}
            slidesPerView={1}
            height={114}
            width={96}
            slideToClickedSlide
            watchOverflow={false}
            direction={getDirection(width)}
            navigation={{
              nextEl: ".bottomSliderArrow",
              prevEl: ".topSliderArrow",
            }}
            onResize={() => {
              firstSwiper.changeDirection(getDirection(width));
            }}
          >
            {productPhotosList}
          </Swiper>
        </div>
      </div>
      <div className={ProductStyle.bigImgWrapper} data-test-id="product-slider">
        <Swiper
          onSwiper={setSecondSwiper}
          controller={{ control: firstSwiper }}
          modules={[Navigation, Controller]}
          spaceBetween={50}
          slidesPerView={1}
          navigation={{
            nextEl: ".rightSliderArrow",
            prevEl: ".leftSliderArrow",
          }}
          className={ProductStyle.swiper}
        >
          {imagesList}
        </Swiper>
        <div className={ProductStyle.arrows}>
          <div className="leftSliderArrow">
            <LeftArrow />
          </div>
          <div className="rightSliderArrow">
            <RightArrow />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductImages;

ProductImages.propTypes = {
  product: PropTypes.shape({
    brand: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    discount: PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.oneOf([null]).isRequired,
    ]),
    id: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
    material: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    particulars: PropTypes.objectOf(PropTypes.bool).isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    reviews: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
      })
    ),
    sizes: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  selectedCategoriesProduct: PropTypes.objectOf(PropTypes.string.isRequired),
};
