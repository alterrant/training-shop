import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getFilters, removeAllFilters } from "../redux/filter-reducer";
import { fetchGenderProducts, resetErrors } from "../redux/initialize-reducer";
import {
  filterProducts,
  getAvailableFilters,
  getAvailableParticulars,
  getUnicFilterValues,
} from "../encapsulated-common-logics/filters";
import filterProductsByParticulars from "../encapsulated-common-logics/get-products";
import {
  resetParticulars,
  resetProducts,
  setAvailableParticulars,
  setFilteredProducts,
  setSelectedParticulars,
} from "../redux/clothes-reducer";
import useErrors from "./use-error";

export const useParticularProducts = (productType, genderProducts) => {
  const { filteredProducts: selectedParticularProducts } = useSelector(
    (state) => state.clothes?.[productType]
  );
  const { navBar: clothesNavBar } = useSelector(
    (state) => state.clothes?.[productType]);
  const { selectedParticulars: selectedParticular } = useSelector(
    (state) => state.clothes?.[productType]
  );

  const stableDispatch = useDispatch();

  useEffect(() => {
    if (genderProducts.length > 0) {
      const navBar = getAvailableParticulars(genderProducts);

      stableDispatch(
        setAvailableParticulars({
          gender: productType,
          clothesNavBar: navBar,
        })
      );
      stableDispatch(
        setSelectedParticulars({
          gender: productType,
          particular: navBar[0]?.filterName,
        })
      );

      return () =>
        stableDispatch(
          resetParticulars({
            gender: productType,
          })
        );
    }
  }, [genderProducts, productType, stableDispatch]);

  useEffect(() => {
    const filteredProd = filterProductsByParticulars({
      genderProducts,
      selectedParticular,
    });

    selectedParticular &&
      stableDispatch(
        setFilteredProducts({
          gender: productType,
          filteredProducts: filteredProd,
        })
      );
  }, [selectedParticular, productType, stableDispatch]);

  return { selectedParticularProducts, clothesNavBar };
};

export const useProducts = (
  productType,
  genderProducts,
  selectedFiltersLists,
  setOpenedStatusFilter
) => {
  const { filteredProducts } = useSelector(
    (state) => state.clothes?.[productType]
  );

  const stableDispatch = useDispatch();

  const errors = useErrors();

  useEffect(() => {
    if (genderProducts.length === 0)
      stableDispatch(fetchGenderProducts(productType));

    if (errors.length > 0) return () => stableDispatch(resetErrors());
  }, [productType]);

  useEffect(() => {
    if (genderProducts.length > 0) {
      const { availableColors, availableSizes, availableBrands } =
        getUnicFilterValues(genderProducts);
      const availableFilters = getAvailableFilters(
        availableColors,
        availableSizes,
        availableBrands
      );

      stableDispatch(getFilters(availableFilters));

      return () => {
        stableDispatch(
          resetProducts({
            gender: productType,
          })
        );
        stableDispatch(removeAllFilters());

        setOpenedStatusFilter(false);
      };
    }
  }, [genderProducts, productType, stableDispatch, setOpenedStatusFilter]);

  useEffect(() => {
    if (genderProducts.length > 0) {
      if (selectedFiltersLists.length === 0)
        stableDispatch(
          setFilteredProducts({
            gender: productType,
            filteredProducts: genderProducts,
          })
        );
      else {
        const filteredProducts = filterProducts(
          genderProducts,
          selectedFiltersLists
        );

        stableDispatch(
          setFilteredProducts({
            gender: productType,
            filteredProducts,
          })
        );
      }
    }
  }, [
    selectedFiltersLists.length,
    genderProducts,
    productType,
    selectedFiltersLists,
    stableDispatch,
  ]);

  return filteredProducts;
};
