import ClothesStyle from "./ClothesMain.module.css";

const ClothesTitle = (props) => {
  return (
      <h2 className={ClothesStyle.tittle}>
        {props.children}
      </h2>
  )
}

export default ClothesTitle;