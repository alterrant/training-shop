import RelatedProductsStyle from "./RelatedProducts.module.css";
import {ClothesItem} from "../clothes/clothesList/Clothes";
import {ReactComponent as Arrow} from "./../../assets/SVG/rightArrow.svg";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from 'swiper';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import 'swiper/css';

const RelatedProducts = ({genderProducts}) => {

  return (
      <section className={RelatedProductsStyle.container}>
        <div className={RelatedProductsStyle.wrapper}>
          <h4 className={RelatedProductsStyle.tittle}>RELATED PRODUCTS</h4>
          <div className={RelatedProductsStyle.arrows}>
            <div className='test2'><Arrow/></div>
            <div className='test1'><Arrow/></div>
          </div>
        </div>
        <div>
          <div className={RelatedProductsStyle.clothWrap} data-test-id='related-slider'>
            <Swiper
                modules={[Navigation]}
                spaceBetween={30}
                slidesPerView={1}
                navigation={{
                  nextEl: '.test1',
                  prevEl: '.test2'
                }}
                breakpoints={{
                  810: {
                    slidesPerView: 4,
                  },
                  490: {
                    slidesPerView: 2
                  }
                }
                }
            >
              {genderProducts.map(item =>
                  <SwiperSlide key={item.id}>
                    <ClothesItem item={item}/>
                  </SwiperSlide>
              )}
            </Swiper>
          </div>
        </div>
      </section>
  )
}

export default RelatedProducts;