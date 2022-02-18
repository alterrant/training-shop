import AdvantageStyle from './Advantage.module.css';
import PropTypes from 'prop-types';

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

Advantage.propTypes = {
  svg: PropTypes.element,
  tittle: PropTypes.string,
  description: PropTypes.string
}

export default Advantage;