import SquareLoading from "./../../assets/gifs/square-Loading.gif";
import PreloaderStyle from "./Preloader.module.css";

const Preloader = () => {
  return (
      <div className={PreloaderStyle.wrapper}>
        <img src={SquareLoading} alt="preloader"/>
      </div>
  )
}

export default Preloader;