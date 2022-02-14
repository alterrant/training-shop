import FooterInfoStyle from "./FooterInfo.module.css";
import {Link} from "react-router-dom";

const FooterInfo = ({links, tittle}) => {
  const list = links.map((item) =>
      <li key={item.id}>
        <Link className={FooterInfoStyle.link} to={`${item.path}`}>{item.name}</Link>
      </li>
  );

  return (
      <li className={FooterInfoStyle.list}>
        <h4 className={FooterInfoStyle.title}>{tittle}</h4>
        <ul>
          {list}
        </ul>
      </li>
  )
}

export default FooterInfo;
