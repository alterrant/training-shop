import ProductStyle from "../Product.module.css";
import {ReactComponent as Pointer} from "../../../assets/SVG/pointer.svg";
import {ReactComponent as LeftArrow} from "../../../assets/SVG/leftArrow.svg";
import {ReactComponent as RightArrow} from "../../../assets/SVG/rightArrow.svg";
import React, {useState} from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Controller, Navigation} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/grid";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import {getDirection} from "../../../encapsulatedCommonLogics/swipersLogic";
import BannersStyle from "../../main/banners/Banners.module.css";

const ProductImages = ({product, selectedCategoriesProduct}) => {

  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);

  const {width} = useWindowDimensions();
  // const productPhotos = useSelector(state => state.product.productInfo.photos);
  const getProductImages = (product, selectedColor) => {
    return product.images.filter(item => item.color === selectedColor);
  }

  const productPhotos = getProductImages(product, selectedCategoriesProduct.color);


  const productPhotosList = productPhotos.map(item =>
      <SwiperSlide key={item.id}>
        {/*{Array.isArray(item.images) ?
            <img className={ClothesStyle.img} src={`https://training.cleverland.by/shop${item.images[0].url}`}
                 alt={item.image}/>
            :
            <img className={ClothesStyle.img} src={item.images}
                 alt={item.image}/>
        }*/}

        <img className={ProductStyle.imgWrapper}
             src={`https://training.cleverland.by/shop${item.url}`}
             alt={`product ${item.color}`}
             key={item.id}/>
      </SwiperSlide>
  );
  const imagesList = productPhotos.map(item =>
      <SwiperSlide key={`mainPhoto ${item.id}`}>
        <img className={BannersStyle.bigBannerImage}
             src={`https://training.cleverland.by/shop${item.url}`} alt={`product ${item.color}`}/>
      </SwiperSlide>);

  return (
      <div className={ProductStyle.wrapper}>
        <div className={ProductStyle.productAngles}>
          <div className={ProductStyle.pointers}>
            <div className='topSliderArrow'><Pointer/></div>
            <div className='bottomSliderArrow'><Pointer/></div>
          </div>
          <div className={ProductStyle.imagesWrapper}>
            <Swiper onSwiper={setFirstSwiper}
                    controller={{control: secondSwiper}}
                    modules={[Navigation, Controller]}
                    spaceBetween={16}
                    slidesPerView={1}
                    height={114}
                    width={96}
                    slideToClickedSlide={true}
                    watchOverflow={false}
                    direction={getDirection(width)}
                    navigation={{
                      nextEl: '.bottomSliderArrow',
                      prevEl: '.topSliderArrow'
                    }}
                    onResize={() => {
                      firstSwiper.changeDirection(getDirection(width));
                    }}
            >
              {productPhotosList}
            </Swiper>
          </div>
        </div>
        <div className={ProductStyle.bigImgWrapper} data-test-id='product-slider'>
          <Swiper
              onSwiper={setSecondSwiper}
              controller={{control: firstSwiper}}
              modules={[Navigation, Controller]}
              spaceBetween={50}
              slidesPerView={1}
              navigation={{
                nextEl: '.rightSliderArrow',
                prevEl: '.leftSliderArrow'
              }}
              className={ProductStyle.swiper}>
            {imagesList}
          </Swiper>
          <div className={ProductStyle.arrows}>
            <div className='leftSliderArrow'><LeftArrow/></div>
            <div className='rightSliderArrow'><RightArrow/></div>
          </div>
        </div>
      </div>
  )
}

export default ProductImages;