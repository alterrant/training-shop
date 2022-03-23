import {useSelector} from "react-redux";

export const useErrorsTest = () => {
  const initError = useSelector(state => state.initialize.isInitError);
  const loadingProductsError = useSelector(state => state.initialize.isLoadingProductsError);
  const loadingGenderProductsError = useSelector(state => state.initialize.isLoadingGenderProductsError);

  return {
    initError,
    loadingProductsError,
    loadingGenderProductsError
  }
}

export const useErrors = () => {
  // const initError = useSelector(state => state.initialize.isInitError);
  const loadingProductsError = useSelector(state => state.initialize.isLoadingProductsError);
  const loadingGenderProductsError = useSelector(state => state.initialize.isLoadingGenderProductsError);

  const allErrors = [loadingProductsError, loadingGenderProductsError];
  const currentErrors = [];

  allErrors.forEach(error => {
    if (error !== false) {
      for (let errorMessage in error) {
        if (error.hasOwnProperty(errorMessage))
        currentErrors.push(error[errorMessage]);
      }
    }
  });

  return currentErrors;
}