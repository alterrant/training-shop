import React from "react";

import BLOGS from "../../../constants/blog";
import LatestBlog from "./latest-blog/LatestBlog";

import LatestBlogsStyle from "./latest-blogs.module.css";

const LatestBlogs = () => {
  const blogList = BLOGS.map((item) => (
    <LatestBlog key={item.id} item={item} />
  ));

  return (
    <section className={LatestBlogsStyle.wrapper}>
      <div className={LatestBlogsStyle.header}>
        <h4 className={LatestBlogsStyle.tittle}>LATEST FROM BLOG</h4>
        <div className={LatestBlogsStyle.seeAllButton}>SEE ALL</div>
      </div>
      <ul className={LatestBlogsStyle.blogs}>{blogList}</ul>
    </section>
  );
};

export default LatestBlogs;
