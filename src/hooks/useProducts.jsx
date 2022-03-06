import {useEffect, useMemo} from "react";
import {useSelector} from "react-redux";
import {filterProducts, getAvailableParticulars} from "../encapsulatedCommonLogics/filters";
import {filterProductsByParticulars} from "../encapsulatedCommonLogics/getProducts";
import {
  resetParticulars,
  resetProducts,
  setAvailableParticulars,
  setProducts,
  setSelectedParticulars
} from "../redux/clothesReducer";
import {useParams} from "react-router-dom";
import {removeAllFilters} from "../redux/filterReducer";
import {useStableDispatch} from "./useRedux";

export const useParticularProducts = (productType, genderProducts) => {
  const selectedParticularProducts = useSelector(state => state.clothes?.[productType]?.products);
  const clothesNavBar = useSelector(state => state.clothes?.[productType]?.navBar);
  const selectedParticular = useSelector(state => state.clothes?.[productType]?.selectedParticulars);
  const stableDispatch = useStableDispatch();
  const memorizedGenderProducts = useMemo(() => genderProducts, [genderProducts]);
  const memorizedProductType = useMemo(() => productType, [productType]);

  useEffect(() => {
    const navBar = getAvailableParticulars(memorizedGenderProducts);

    stableDispatch(setAvailableParticulars({gender: memorizedProductType, clothesNavBar: navBar}));
    stableDispatch(setSelectedParticulars({gender: memorizedProductType, particular: navBar[0]?.filterName}));

    return () => stableDispatch(resetParticulars({gender: memorizedProductType}));
  }, [memorizedGenderProducts, memorizedProductType, stableDispatch]);

  useEffect(() => {
    const filteredProd = filterProductsByParticulars({memorizedGenderProducts, selectedParticular});

    stableDispatch(setProducts({gender: memorizedProductType, products: filteredProd}));
  }, [selectedParticular, memorizedGenderProducts, memorizedProductType, stableDispatch]);

  return {selectedParticularProducts, clothesNavBar};
}

export const useProducts = (productType, genderProducts, selectedFiltersLists, setOpenedStatusFilter) => {
  const products = useSelector(state => state.clothes?.[productType]?.products);
  const page = useParams();
  const stableDispatch = useStableDispatch();
  const memorizedGenderProducts = useMemo(() => genderProducts, [genderProducts]);
  const memorizedProductType = useMemo(() => productType, [productType]);

  useEffect(() => {
    //Убрать баг можно, создав переменную isLoaded в useParams. Initial = false, toggle при смене useEffect(..., [page]);
    if (selectedFiltersLists.length === 0 && products.length !== 0) stableDispatch(setProducts({gender: memorizedProductType, products: memorizedGenderProducts}));
    else if (selectedFiltersLists.length !== 0) {
      const filteredProducts = filterProducts(memorizedGenderProducts, selectedFiltersLists);

      stableDispatch(setProducts({gender: memorizedProductType, products: filteredProducts}));
    }
  }, [selectedFiltersLists.length, memorizedGenderProducts, memorizedProductType, selectedFiltersLists, products.length, stableDispatch]);

  useEffect(() => {
    stableDispatch(setProducts({gender: memorizedProductType, products: memorizedGenderProducts}));

    return () => {
      stableDispatch(resetProducts({gender: memorizedProductType}));
      stableDispatch(removeAllFilters());
      setOpenedStatusFilter(false);
    }
  }, [page, memorizedGenderProducts, memorizedProductType, stableDispatch, setOpenedStatusFilter]);

  return products;
}