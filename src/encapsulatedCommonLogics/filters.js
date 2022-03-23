import {CLOTHES_DICTIONARY} from "../constants/menuConst";

export const getAvailableParticulars = (products) => {
  const availableParticulars = new Set([]);

  products.forEach(item => {
    for (let key in item.particulars) {
      //IDE ругается на отсутствие проверки
      if (item.particulars.hasOwnProperty(key)) {
        if (item.particulars?.[key]) availableParticulars.add(key);
      }
    }
  })

  const clothesNavBar = [];
  CLOTHES_DICTIONARY.forEach(item => {
    if (availableParticulars.has(item.filterName)) clothesNavBar.push(item);
  });

  return clothesNavBar;
}

export const filterProducts = (genderProducts, selectedFiltersLists) => {

  return genderProducts.filter(product => {
    let isPreviousFiltersConfirm = true;

    if (selectedFiltersLists.length === 1) {
      return isProductConformFilter(product, selectedFiltersLists[0]);
    }

    const resultFilterProduct = selectedFiltersLists.reduce((prevFilter, curFilter) => {
      if (prevFilter.filterType === curFilter.filterType) return {
        filterType: curFilter.filterType,
        isProductConformFilter: (isPreviousFiltersConfirm && isProductConformFilter(product, curFilter)) || prevFilter.isProductConformFilter
      };

      isPreviousFiltersConfirm = prevFilter.isProductConformFilter;

      return {
        filterType: curFilter.filterType,
        isProductConformFilter: isPreviousFiltersConfirm && isProductConformFilter(product, curFilter)
      };
    }, {filterType: 'value', isProductConformFilter: true});

    return resultFilterProduct.isProductConformFilter;
  });
}

const getFilterPrices = (valueRange) => {
  const filterPrices = valueRange.filterValue.split('-').map(item => {
    const price = item.slice(1);
    return parseInt(price);
  }).sort((a, b) => a - b);

  return {
    minFilterPrice: filterPrices[0],
    maxFilterPrice: filterPrices[1]
        ? filterPrices[1]
        :
        filterPrices[0]
  }
}

const isProductConformFilter = (product, curFilter) => {
  switch (curFilter.filterType) {
    case  'price':
      const {minFilterPrice, maxFilterPrice} = getFilterPrices(curFilter);

      return (minFilterPrice === maxFilterPrice) ?
          minFilterPrice <= product[curFilter.filterType]
          :
          (minFilterPrice <= product[curFilter.filterType] && (maxFilterPrice >= product[curFilter.filterType]));
    case  'brand':
      return product[curFilter.filterType] === curFilter.filterValue;
    case 'size':
      return product['sizes'].find(item => item === curFilter.filterValue);
    case 'color':
      return product.images.find(productPhoto => productPhoto[curFilter.filterType] === curFilter.filterValue);
    default:
      return true;
  }
}


export const getUnicFilterValues = (genderProducts) => {
  const availableColors = new Set([]);
  const availableSizes = new Set([]);
  const availablePrices = new Set([]);
  const availableBrands = new Set([]);

  //поиск уникальных цветов
  genderProducts.forEach(item => {
    item.images.forEach(images => availableColors.add(images.color));
  })
  //поиск уникальных размеров продуктов
  genderProducts.forEach(item => {
    item.sizes.forEach(size => availableSizes.add(size));
  })
  //поиск уникальных стоимостей
  genderProducts.forEach(item => {
    availablePrices.add(item.price);
  })
  //поиск уникальных брендов
  genderProducts.forEach(item => {
    availableBrands.add(item.brand);
  })

  return {availableColors, availableSizes, availableBrands};
}

export const getProductAvailableColors = (product) => {
  const availableProductColors = new Set([]);

  product.images.forEach(image => availableProductColors.add(image.color));

  return product.images.filter(image => availableProductColors.delete(image.color));
}

export const getAvailableFilters = (availableColors, availableSizes, availableBrands) => {
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



