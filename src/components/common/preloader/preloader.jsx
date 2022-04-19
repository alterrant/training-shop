import React from "react";
import PreloaderStyles from "./preloader.module.css";

const Preloader = () => (
  <div className={PreloaderStyles.preloader} data-test-id="loader">
    <div className={PreloaderStyles.spinner} />
  </div>
);

export default Preloader;
