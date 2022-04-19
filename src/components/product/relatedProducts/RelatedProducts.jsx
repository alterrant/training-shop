import React from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import { ClothesItem } from "../../clothes/clothesList/Clothes";

import { ReactComponent as Arrow } from "../../../assets/SVG/rightArrow.svg";

import RelatedProductsStyle from "./RelatedProducts.module.css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css";

const RelatedProducts = ({ genderProducts }) => {
  return (
    <section className={RelatedProductsStyle.container}>
      <div className={RelatedProductsStyle.wrapper}>
        <h4 className={RelatedProductsStyle.tittle}>RELATED PRODUCTS</h4>
        <div className={RelatedProductsStyle.arrows}>
          <div className="test2">
            <Arrow />
          </div>
          <div className="test1">
            <Arrow />
          </div>
        </div>
      </div>
      <div>
        <div
          className={RelatedProductsStyle.clothWrap}
          data-test-id="related-slider"
        >
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: ".test1",
              prevEl: ".test2",
            }}
            breakpoints={{
              810: {
                slidesPerView: 4,
              },
              490: {
                slidesPerView: 2,
              },
            }}
          >
            {genderProducts.map((item) => (
              <SwiperSlide key={item.id}>
                <ClothesItem item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;

RelatedProducts.propTypes = {
  genderProducts: PropTypes.arrayOf(
    PropTypes.shape({
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
    }).isRequired
  ),
};
