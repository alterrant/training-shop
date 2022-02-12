import {useSelector} from "react-redux";

export const useFilter = () => {
  const allFilters = useSelector((state => Object.entries(state.filter)));

  const selectedFilters = [];

  allFilters.forEach((filterEntries) => {

    filterEntries[1].forEach(item => {
      if (item.selected) {

        const filter = {};
        filter.filterType = filterEntries[0];
        filter.filterValue = item.name;

        selectedFilters.push(filter);
      }
    })
  })

  return selectedFilters;
}