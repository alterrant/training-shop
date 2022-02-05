import Cards from "./Cards";
import CopyrightStyle from "./Copyright.module.css";

const Copyright = () => {
  return (
      <ul className={ CopyrightStyle.wrapper }>
        <li>
          <p>Copyright © 2032 all rights reserved</p>
        </li>
        <li className={ CopyrightStyle.cards }>
          <Cards/>
        </li>
        <li>
          <p>Clevertec.ru/training</p>
        </li>
      </ul>
  )
}

export default Copyright;