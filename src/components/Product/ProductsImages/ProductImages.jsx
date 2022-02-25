import ProductStyle from "../Product.module.css";
import {ReactComponent as Pointer} from "../../../assets/SVG/pointer.svg";
import {ReactComponent as LeftArrow} from "../../../assets/SVG/leftArrow.svg";
import {ReactComponent as RightArrow} from "../../../assets/SVG/rightArrow.svg";
import React, {useState} from "react";
import {Swipe} from "../../banners/Banners";
import {useSelector} from "react-redux";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Controller, Navigation} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/grid";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import {getDirection} from "../../../encapsulatedCommonLogics/swipersLogic";


const ProductImages = (/*{product, selectedCategoriesProduct}*/) => {


  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);

  // const window = useWindowDimensions1();
  const {width} = useWindowDimensions();

  const productPhotos = useSelector(state => state.product.productInfo.photos);

  const productPhotoList = productPhotos.map(item =>
      <SwiperSlide key={item.id}><ProductPhoto src={item.src} alt={item.alt} key={item.id}/></SwiperSlide>
  )

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
              {productPhotoList}
            </Swiper>
          </div>
        </div>
        <div className={ProductStyle.bigImgWrapper} data-test-id='product-slider'>
          <Swipe onSwiper={setSecondSwiper}
                 controller={{control: firstSwiper}}
                 images={productPhotos}
                 nextEl={'rightSliderArrow'}
                 prevEl={'leftSliderArrow'}
          />
          <div className={ProductStyle.arrows}>
            <div className='leftSliderArrow'><LeftArrow/></div>
            <div className='rightSliderArrow'><RightArrow/></div>
          </div>
        </div>
      </div>
  )
}

export default ProductImages;

const ProductPhoto = ({src, alt}) => {
  return (
      <img className={ProductStyle.imgWrapper} src={src} alt={alt}/>
  )
}