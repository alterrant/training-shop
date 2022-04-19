import React from "react";
import PropTypes from "prop-types";

import LatestBlogStyle from "./LatestBlog.module.css";

const LatestBlog = ({ item }) => (
  <li className={LatestBlogStyle.wrapper}>
    <img className={LatestBlogStyle.img} src={item.img} alt={item.image} />
    <div className={LatestBlogStyle.post}>
      <h3 className={LatestBlogStyle.tittle}>{item.tittle}</h3>
      <p className={LatestBlogStyle.description}>{item.description}</p>
    </div>
  </li>
);

export default LatestBlog;

LatestBlog.propTypes = {
  item: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
};
