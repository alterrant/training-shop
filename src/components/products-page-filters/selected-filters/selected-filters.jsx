import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import chooseFilterAction from "../../../encapsulated-common-logics/distribution-filters";

import { ReactComponent as RemoveSvg } from "../../../assets/SVG/filter-opened.svg";

import ActiveFiltersStyle from "./selected-filters.module.css";

const SelectedFilters = ({ selectedFiltersLists }) => {
  const selectedFilters = selectedFiltersLists.map((item) => (
    <li
      key={item.filterValue}
      className={ActiveFiltersStyle.selectedFilterText}
    >
      <RemoveFilter
        filterType={item.filterType}
        filterValue={item.filterValue}
      />
      <p>
        {`${item.filterType[0].toUpperCase() + item.filterType.slice(1)}: ${
          item.filterValue
        }`}
      </p>
    </li>
  ));

  return (
    <div className={ActiveFiltersStyle.container}>
      <ul className={ActiveFiltersStyle.wrapper}>
        <li className={ActiveFiltersStyle.selectedCounter}>
          {`${selectedFilters.length} items Found`}
        </li>
        <li className={ActiveFiltersStyle.selectedFilterText}>
          <RemoveFilter filterType="removeAllFilters" />
          <p>Clear All</p>
        </li>
        {selectedFilters}
      </ul>
    </div>
  );
};

export default SelectedFilters;

const RemoveFilter = ({ filterType, filterValue }) => {
  const dispatch = useDispatch();
  const filterAction = chooseFilterAction(filterType);

  return (
    <div
      className={ActiveFiltersStyle.removeFilter}
      onClick={() => dispatch(filterAction(filterValue))}
    >
      <RemoveSvg width="12px" height="12px" opacity="0.6" />
    </div>
  );
};

SelectedFilters.propTypes = {
  selectedFiltersLists: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};

RemoveFilter.propTypes = {
  filterType: PropTypes.string,
  filterValue: PropTypes.string,
};
