const changeBodyOverflow = (isMenuOpen) => {
  if (!isMenuOpen) {
    const windowWidth = document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";

    const changedWindowWidth = document.documentElement.clientWidth;

    if (changedWindowWidth !== windowWidth) {
      document.body.style.paddingRight = `${
        changedWindowWidth - windowWidth
      } px`;
    }
  } else {
    document.body.style.overflow = "visible";

    document.body.style.paddingRight = "";
  }
};

export default changeBodyOverflow;
