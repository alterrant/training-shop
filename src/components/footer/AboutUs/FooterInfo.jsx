import FooterInfoStyle from "./FooterInfo.module.css";

const FooterInfo = (props) => {
  const list = props.children.map((item, index) =>
      <li key={index}>
        {item}
      </li>
  );

  return (
      <li className={FooterInfoStyle.list}>
        <ul>
        {list}
        </ul>
      </li>
  )
}

export default FooterInfo;