import AdvantageStyle from './Advantage.module.css';

export const Advantage = ({svg, tittle, description}) => {
  return (
      <div className={AdvantageStyle.wrapper}>
        {svg}
        <div className={AdvantageStyle.description}>
          <p className={AdvantageStyle.tittle}>
            {tittle}
          </p>
          <p className={AdvantageStyle.description}>
            {description}
          </p>
        </div>
      </div>
  )
}

export default Advantage;