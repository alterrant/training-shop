import {useCallback, useEffect, useMemo} from "react";
import {useDispatch, useSelector} from "react-redux";
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
  // const dispatch = useStableDispatch();
  const dispatch = useDispatch();
  const stableDispatch = useCallback(dispatch, [dispatch]);
  const memorizedGenderProducts = useMemo(() => genderProducts, [genderProducts]);
  const memorizedProductType = useMemo(() => productType, [productType]);

  useEffect(() => {
    const navBar = getAvailableParticulars(memorizedGenderProducts);

    stableDispatch(setAvailableParticulars({gender: memorizedProductType, clothesNavBar: navBar}));
    stableDispatch(setSelectedParticulars({gender: memorizedProductType, particular: navBar[0]?.filterName}));

    return () => stableDispatch(resetParticulars({gender: memorizedProductType}));
  }, []);

  useEffect(() => {
    const filteredProd = filterProductsByParticulars({memorizedGenderProducts, selectedParticular});

    stableDispatch(setProducts({gender: memorizedProductType, products: filteredProd}));
  }, [selectedParticular]);

  return {selectedParticularProducts, clothesNavBar};
}

export const useProducts = (productType, genderProducts, selectedFiltersLists, setOpenedStatusFilter) => {
  const products = useSelector(state => state.clothes?.[productType]?.products);
  const page = useParams();
  // const dispatch = useStableDispatch();
  const dispatch = useDispatch();
  const stableDispatch = useCallback(dispatch, [dispatch]);
  const memorizedGenderProducts = useMemo(() => genderProducts, [genderProducts]);
  const memorizedProductType = useMemo(() => productType, [productType]);
  const memorizedSelectedFiltersLists = useMemo(() => selectedFiltersLists, [selectedFiltersLists]);
  const stableSetOpenedStatusFilter = useCallback(setOpenedStatusFilter, [page])

  useEffect(() => {
    //Убрать баг можно, создав переменную isLoaded в useParams. Initial = false, toggle при смене useEffect(..., [page]);
    if (memorizedSelectedFiltersLists.length === 0 && products.length !== 0) stableDispatch(setProducts({gender: memorizedProductType, products: memorizedGenderProducts}));
    else if (memorizedSelectedFiltersLists.length !== 0) {
      const filteredProducts = filterProducts(memorizedGenderProducts, memorizedSelectedFiltersLists);

      stableDispatch(setProducts({gender: memorizedProductType, products: filteredProducts}));
    }
  }, [memorizedSelectedFiltersLists.length]);

  useEffect(() => {
    stableDispatch(setProducts({gender: memorizedProductType, products: memorizedGenderProducts}));

    return () => {
      stableDispatch(resetProducts({gender: memorizedProductType}));
      stableDispatch(removeAllFilters());
      stableSetOpenedStatusFilter(false);
    }
  }, [page]);

  return products;
}