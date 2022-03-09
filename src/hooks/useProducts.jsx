import {useEffect} from "react";
import {useSelector} from "react-redux";
import {filterProducts, getAvailableParticulars, getUnicFilterValues} from "../encapsulatedCommonLogics/filters";
import {filterProductsByParticulars} from "../encapsulatedCommonLogics/getProducts";
import {
  resetParticulars,
  resetProducts,
  setAvailableParticulars,
  setProducts,
  setSelectedParticulars
} from "../redux/clothesReducer";
import {useParams} from "react-router-dom";
import {getFilters, removeAllFilters} from "../redux/filterReducer";
import {useStableDispatch} from "./useRedux";

export const useParticularProducts = (productType, genderProducts) => {
  const selectedParticularProducts = useSelector(state => state.clothes?.[productType]?.products);
  const clothesNavBar = useSelector(state => state.clothes?.[productType]?.navBar);
  const selectedParticular = useSelector(state => state.clothes?.[productType]?.selectedParticulars);
  const stableDispatch = useStableDispatch();

  useEffect(() => {
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
  }, [genderProducts, productType, stableDispatch]);

  useEffect(() => {
    const filteredProd = filterProductsByParticulars({genderProducts, selectedParticular});

    selectedParticular && stableDispatch(setProducts({
      gender: productType,
      products: filteredProd
    }));
  }, [selectedParticular, genderProducts, productType, stableDispatch]);

  return {selectedParticularProducts, clothesNavBar};
}

export const useProducts = (productType, genderProducts, selectedFiltersLists, setOpenedStatusFilter) => {
  const products = useSelector(state => state.clothes?.[productType]?.products);
  const page = useParams();
  const stableDispatch = useStableDispatch();

  useEffect(() => {
    //Убрать баг можно, создав переменную isLoaded в useParams. Initial = false, toggle при смене useEffect(..., [page]);
    if (selectedFiltersLists.length === 0) stableDispatch(setProducts({
      gender: productType,
      products: genderProducts
    }));
    else {
      const filteredProducts = filterProducts(genderProducts, selectedFiltersLists);

      stableDispatch(setProducts({
        gender: productType,
        products: filteredProducts
      }));
    }
  }, [selectedFiltersLists.length, genderProducts, productType, selectedFiltersLists, stableDispatch]);

  useEffect(() => {
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
  }, [page, genderProducts, productType, stableDispatch, setOpenedStatusFilter]);

  return products;
}

const getAvailableFilters = (availableColors, availableSizes, availableBrands) => {
  const filters = {}
  const filterTypes = ['color', 'size', 'brand'];

  const availableFilter = (filterType) => {
    switch (filterType) {
      case 'color':
        return availableColors;
      case 'size':
        return availableSizes;
      case 'brand':
        return availableBrands;
      default:
        return [];
    }
  };

  filterTypes.forEach(filterType => {
    let id = 1;
    filters[filterType] = Array.from(availableFilter(filterType)).map(item => ({
      id: id++,
      name: item,
      selected: false
    }));
  })

  return filters;
}