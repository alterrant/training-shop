import { useSelector } from "react-redux";

export default () => {
  // const initError = useSelector(state => state.initialize.isInitError);
  const loadingProductsError = useSelector(
    (state) => state.initialize.isLoadingProductsError
  );
  const loadingGenderProductsError = useSelector(
    (state) => state.initialize.isLoadingGenderProductsError
  );

  const allErrors = [loadingProductsError, loadingGenderProductsError];
  const currentErrors = [];

  allErrors.forEach((error) => {
    if (error !== false) {
      for (let errorMessage in error) {
        if (error.hasOwnProperty(errorMessage))
        currentErrors.push(error[errorMessage]);
      }
    }
  });

  return currentErrors;
};
