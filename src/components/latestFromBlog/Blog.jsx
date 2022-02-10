import BlogStyle from "./Blog.module.css";

const Blog = ({item}) => {

  return (
      <li className={BlogStyle.wrapper}>
        <img className={BlogStyle.img} src={item.img} alt="item.image"/>
        <div className={BlogStyle.post}>
          <h3 className={BlogStyle.tittle}>{item.tittle}</h3>
          <p className={BlogStyle.description}>{item.description}</p>
        </div>

      </li>
  )
}

export default Blog;
