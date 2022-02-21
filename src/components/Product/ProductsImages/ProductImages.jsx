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


const ProductImages = (/*{product, selectedCategoriesProduct}*/) => {


  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);

  // const window = useWindowDimensions1();
  const {width} = useWindowDimensions();




  const productPhotos = useSelector(state => state.product.productInfo.photos);

  const productPhotoList = productPhotos.map(item =>
      <SwiperSlide key={item.id}><ProductPhoto src={item.src} alt={item.alt} key={item.id}/></SwiperSlide>
  )

  function getDirection() {
    return (width <= 750) ? 'horizontal' : 'vertical';
}
  return (
      <div className={ProductStyle.wrapper} data-test-id='product-slider'>
        <div className={ProductStyle.productAngles}>
          <div className={ProductStyle.pointers}>
            <div className='topSliderArrow'><Pointer/></div>
            <div className='bottomSliderArrow'><Pointer/></div>
            {/*<Pointer className={ProductStyle.down}/>*/}
          </div>
          {/*<ul className={ProductStyle.imagesWrapper}>*/}
          <div className={ProductStyle.imagesWrapper}>
            <Swiper onSwiper={setFirstSwiper}
                    controller={{control: secondSwiper}}
                    modules={[Navigation, Controller]}
                    spaceBetween={16}
                    slidesPerView={1}
                    height={114}
                    width={96}

                    watchOverflow={false}
                    direction={getDirection()}
                    navigation={{
                      nextEl: '.bottomSliderArrow',
                      prevEl: '.topSliderArrow'
                    }}
                    onResize={() => {
                      firstSwiper.changeDirection(getDirection());
                    }}
                    onChangeDirection={() => {

                    }}
            >
              {productPhotoList}
            </Swiper>
          </div>
          {/*</ul>*/}
        </div>
        <div className={ProductStyle.bigImgWrapper}>
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
      // <li>
      //   <div className={ProductStyle.imgWrapper}>
      <img src={src} alt={alt}/>
      // </div>
      // </li>
  )
}