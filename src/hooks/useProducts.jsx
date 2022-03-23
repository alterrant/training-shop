import {useEffect} from "react";
import {useSelector} from "react-redux";
import {
  filterProducts,
  getAvailableFilters,
  getAvailableParticulars,
  getUnicFilterValues
} from "../encapsulatedCommonLogics/filters";
import {filterProductsByParticulars} from "../encapsulatedCommonLogics/getProducts";
import {
  resetParticulars,
  resetProducts,
  setAvailableParticulars,
  setFilteredProducts,
  setSelectedParticulars
} from "../redux/clothesReducer";
import {getFilters, removeAllFilters} from "../redux/filterReducer";
import {useStableDispatch} from "./useRedux";
import {fetchGenderProducts, resetErrors} from "../redux/initializeReducer";
import {useErrors} from "./useError";

export const useParticularProducts = (productType, genderProducts) => {
  const selectedParticularProducts = useSelector(state => state.clothes?.[productType]?.filteredProducts);
  const clothesNavBar = useSelector(state => state.clothes?.[productType]?.navBar);
  const selectedParticular = useSelector(state => state.clothes?.[productType]?.selectedParticulars);
  const stableDispatch = useStableDispatch();

  useEffect(() => {
    if (genderProducts.length > 0) {
      const navBar = getAvailableParticulars(genderProducts);

      stableDispatch(setAvailableParticulars({
        gender: productType,
        clothesNavBar: navBar
      }));
      stableDispatch(setSelectedParticulars({
        gender: productType,
        particular: navBar[0]?.filterName
      }));

      return () => stableDispatch(resetParticulars({
        gender: productType
      }));
    }
  }, [genderProducts, productType, stableDispatch]);

  useEffect(() => {
    const filteredProd = filterProductsByParticulars({genderProducts, selectedParticular});

    selectedParticular && stableDispatch(setFilteredProducts({
      gender: productType,
      filteredProducts: filteredProd
    }));
  }, [selectedParticular, productType, stableDispatch]);

  return {selectedParticularProducts, clothesNavBar};
}

export const useProducts = (productType, genderProducts, selectedFiltersLists, setOpenedStatusFilter) => {
  const filteredProducts = useSelector(state => state.clothes?.[productType]?.filteredProducts);
  const stableDispatch = useStableDispatch();
  const errors = useErrors();

  useEffect(() => {
    if (genderProducts.length === 0) stableDispatch(fetchGenderProducts(productType));

    if (errors.length > 0) return () => stableDispatch(resetErrors());
  }, [productType]);

  useEffect(() => {
    if (genderProducts.length > 0) {
      const {availableColors, availableSizes, availableBrands} = getUnicFilterValues(genderProducts);
      const availableFilters = getAvailableFilters(availableColors, availableSizes, availableBrands);

      stableDispatch(getFilters(availableFilters));

      return () => {
        stableDispatch(resetProducts({
          gender: productType
        }));
        stableDispatch(removeAllFilters());

        setOpenedStatusFilter(false);
      };
    }
  }, [genderProducts, productType, stableDispatch, setOpenedStatusFilter]);

  useEffect(() => {
    if (genderProducts.length > 0) {
      if (selectedFiltersLists.length === 0) stableDispatch(setFilteredProducts({
        gender: productType,
        filteredProducts: genderProducts
      }));
      else {
        const filteredProducts = filterProducts(genderProducts, selectedFiltersLists);

        stableDispatch(setFilteredProducts({
          gender: productType,
          filteredProducts: filteredProducts
        }));
      }
    }
  }, [selectedFiltersLists.length, genderProducts, productType, selectedFiltersLists, stableDispatch]);

  return filteredProducts;
}