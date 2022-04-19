import PropTypes from "prop-types";
import { React, useState } from "react";
import { nanoid } from "nanoid";
import { WHITE, YELLOW } from "../../../constants/colors";
import RatingStarsStyle from "./RatingStars.module.css";

const RatingStars = ({
  rating,
  isRatingInteractive = false,
  formControle = false,
}) => {
  const [myRating, setMyRating] = useState(null);
  const fiveElementsTemplate = [0, 1, 2, 3, 4];
  // let timer

  const starList = fiveElementsTemplate.map((item, index) => {
    if (myRating && index + 1 <= myRating)
      return (
        <Star
          setMyRating={setMyRating}
          color={YELLOW}
          index={index}
          isRatingInteractive={isRatingInteractive}
          formControle={formControle}
          key={nanoid()}
        />
      );
    if (!myRating && rating && index + 1 <= rating)
      return (
        <Star
          setMyRating={setMyRating}
          color={YELLOW}
          index={index}
          isRatingInteractive={isRatingInteractive}
          formControle={formControle}
          key={nanoid()}
        />
      );

    return (
      <Star
        setMyRating={setMyRating}
        color={WHITE}
        index={index}
        isRatingInteractive={isRatingInteractive}
        formControle={formControle}
        key={nanoid()}
      />
    );
  });
  return (
    <ul
      className={RatingStarsStyle.wrapper}
      /* onMouseMove={() => {
            let timer;
            clearTimeout(timer);

            if (!timer) timer = setTimeout(() => {
              setMyRating(null)
            }, 1000);
          }} */
      onMouseEnter={() => {
        setTimeout(() => setMyRating(null), 5000);
      }}
    >
      {starList}
    </ul>
  );
};

export default RatingStars;

const Star = ({
  color,
  setMyRating,
  index,
  isRatingInteractive,
  formControle,
}) => {
  if (!isRatingInteractive)
    return (
      <li className={RatingStarsStyle.item}>
        <StarSVG fill={color} />
      </li>
    );

  return (
    <li
      role="presentation"
      onMouseEnter={() => setMyRating(index + 1)}
      onMouseLeave={() => setMyRating(null)}
      onMouseUp={() => formControle("rating", index + 1)}
      className={`${RatingStarsStyle.item} ${RatingStarsStyle.interactive}`}
    >
      <StarSVG fill={color} />
    </li>
  );
};

const StarSVG = ({ fill = WHITE }) => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.33431 2.04889C6.54431 1.40419 7.45641 1.40419 7.66571 2.04889L8.41471 4.35329C8.46047
             4.49364 8.54942 4.61592 8.66886 4.70267C8.78829 4.78941 8.93209 4.83618 9.07971 4.83629H11.5031C12.1814
              4.83629 12.4628 5.70429 11.9147 6.10329L9.95471 7.52709C9.83503 7.61391 9.74591 7.7364 9.70014
               7.87699C9.65437 8.01758 9.65428 8.16905 9.69991 8.30969L10.4489 10.6141C10.6589 11.2588 9.92041
                11.7957 9.37091 11.3967L7.41091 9.97289C7.29135 9.8861 7.1474 9.83935 6.99966 9.83935C6.85192
                 9.83935 6.70796 9.8861 6.58841 9.97289L4.62841 11.3967C4.07961 11.7957 3.34181 11.2588 3.55111
                  10.6141L4.30011 8.30969C4.34573 8.16905 4.34565 8.01758 4.29987 7.87699C4.2541 7.7364 4.16498
                   7.61391 4.04531 7.52709L2.08601 6.10399C1.53791 5.70499 1.82001 4.83699 2.49761 4.83699H4.92031C5.06804
                    4.83703 5.212 4.79033 5.33157 4.70357C5.45115 4.61681 5.54021 4.49445 5.58601 4.35399L6.33501
                     2.04959L6.33431 2.04889Z"
        fill={fill}
      />
    </svg>
  );
};

RatingStars.propTypes = {
  rating: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([null])]),
  isRatingInteractive: PropTypes.bool,
  formControle: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
};
Star.propTypes = {
  color: PropTypes.string.isRequired,
  setMyRating: PropTypes.func,
  index: PropTypes.number,
  isRatingInteractive: PropTypes.bool,
  formControle: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
};
StarSVG.propTypes = {
  fill: PropTypes.string,
};
