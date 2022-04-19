import React from "react";
import PreloaderStyles from "./Preloader.module.css";

const Preloader = () => (
  <div className={PreloaderStyles.preloader} data-test-id="loader">
    <div className={PreloaderStyles.spinner} />
  </div>
);

export default Preloader;
