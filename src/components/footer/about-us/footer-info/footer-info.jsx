import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import FooterInfoStyle from "./footer-info.module.css";

const FooterInfo = ({ links, tittle }) => {
  const list = links.map((item) => (
    <li key={item.id}>
      <Link
        className={FooterInfoStyle.link}
        to={`${item.path}`}
        data-test-id={`footer-nav-link-${item.name.toLowerCase()}`}
      >
        {item.name}{" "}
      </Link>
    </li>
  ));

  return (
    <li className={FooterInfoStyle.list}>
      <h4 className={FooterInfoStyle.title}>{tittle}</h4>
      <ul>{list}</ul>
    </li>
  );
};

export default FooterInfo;

FooterInfo.propTypes = {
  links: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  tittle: PropTypes.string,
};
