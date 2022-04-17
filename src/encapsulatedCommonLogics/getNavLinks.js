export const getNavLinks = (item) => {
  const tittle = Object.keys(item)[0];
  const description = item[tittle];

  return {
    tittle,
    description
  }
}