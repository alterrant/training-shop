import {useEffect} from "react";
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

export const useParticularProducts = (productType, genderProducts) => {
  const selectedParticularProducts = useSelector(state => state.clothes?.[productType]?.products);
  const clothesNavBar = useSelector(state => state.clothes?.[productType]?.navBar);
  const selectedParticular = useSelector(state => state.clothes?.[productType]?.selectedParticulars);
  const dispatch = useDispatch();

  useEffect(() => {
    const navBar = getAvailableParticulars(genderProducts);

    dispatch(setAvailableParticulars({gender: productType, clothesNavBar: navBar}));
    dispatch(setSelectedParticulars({gender: productType, particular: navBar[0]?.filterName}));

    return () => dispatch(resetParticulars({gender: productType}));
  }, []);

  useEffect(() => {
    const filteredProd = filterProductsByParticulars({genderProducts, selectedParticular});

    dispatch(setProducts({gender: productType, products: filteredProd}));
  }, [selectedParticular]);

  return {selectedParticularProducts, clothesNavBar};
}

export const useProducts = (productType, genderProducts, selectedFiltersLists, setOpenedStatusFilter) => {
  const products = useSelector(state => state.clothes?.[productType]?.products);
  const page = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    //Убрать баг можно, создав переменную isLoaded в useParams. Initial = false, toggle при смене useEffect(..., [page]);
    if (selectedFiltersLists.length === 0 && products.length !== 0) dispatch(setProducts({gender: productType, products: genderProducts}));
    else if (selectedFiltersLists.length !== 0) {
      const filteredProducts = filterProducts(genderProducts, selectedFiltersLists);
      debugger
      dispatch(setProducts({gender: productType, products: filteredProducts}));
    }
  }, [selectedFiltersLists.length]);

  useEffect(() => {
    dispatch(setProducts({gender: productType, products: genderProducts}));

    return () => {
      dispatch(resetProducts({gender: productType}));
      dispatch(removeAllFilters());
      setOpenedStatusFilter(false);
    }
  }, [page]);

  return products;
}