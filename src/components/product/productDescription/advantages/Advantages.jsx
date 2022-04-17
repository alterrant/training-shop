import AdvantagesStyle from "./Advantages.module.css";

const Advantages = ({svg, description}) => {

  return (
      <div className={AdvantagesStyle.wrapper}>
          {svg}
        <p>
          {description}
        </p>
      </div>
  )
}

export default Advantages;