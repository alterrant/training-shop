export const changeBodyOverflow = (isMenuOpen) => {
  if (!isMenuOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'visible';
  }
}