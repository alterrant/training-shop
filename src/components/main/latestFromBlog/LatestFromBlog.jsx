import LatestFromBlogStyle from "./LatestFromBlog.module.css";
import {BLOGS} from "../../../constants/blog";
import Blog from "./Blog";

const LatestFromBlog = () => {

  const blogList = BLOGS.map(item =>
      <Blog key={item.id} item={item}/>
  )

  return (
      <section className={LatestFromBlogStyle.wrapper}>
        <div className={LatestFromBlogStyle.header}>
          <h4 className={LatestFromBlogStyle.tittle}>
            LATEST FROM BLOG
          </h4>
          <div className={LatestFromBlogStyle.seeAllButton}>
            SEE ALL
          </div>
        </div>
        <ul className={LatestFromBlogStyle.blogs}>
          {blogList}
        </ul>
      </section>

  )
}

export default LatestFromBlog;
