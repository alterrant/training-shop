import BenefitStyle from './Benefit.module.css';

export const Benefit = ({item}) => {

  return (
      <div className={BenefitStyle.wrapper} style={{backgroundImage: `url(${item.img})`}}>
        <div className={BenefitStyle.centerMask}>
          <div className={BenefitStyle.whiteRectangle}>
            <p className={BenefitStyle.tittle}>
              {item.tittle}
            </p>
            <p className={BenefitStyle.description}>
              {item.description}
              {item.discount && <span>{" " + item.discount}</span>}
            </p>
          </div>
        </div>
      </div>
  )
}

export default Benefit;