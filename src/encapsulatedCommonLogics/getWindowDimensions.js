export default () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};
