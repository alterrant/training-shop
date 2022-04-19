import { React, useState } from "react";
import PropTypes from "prop-types";

import { ReactComponent as FilterOpened } from "../../../assets/SVG/filter-opened.svg";
import { ReactComponent as FilterClosed } from "../../../assets/SVG/filter-closed.svg";
import { ReactComponent as ViewList } from "../../../assets/SVG/view-list.svg";
import { ReactComponent as ViewListActive } from "../../../assets/SVG/view-list-active.svg";
import { ReactComponent as ViewGrid } from "../../../assets/SVG/view-grid.svg";
import { ReactComponent as ViewGridActive } from "../../../assets/SVG/view-grid-active.svg";

import ProductFilterStyle from "./filter-bar.module.css";

const FilterBar = ({ isOpenedFilter, setOpenedStatusFilter }) => {
  const [viewStyle, changeViewStyle] = useState("grid");

  const isListStyleActive = viewStyle === "list";

  const setViewStyle = () => {
    if (viewStyle === "list") return changeViewStyle("grid");
    changeViewStyle("list");
  };

  return (
    <div className={ProductFilterStyle.wrapper}>
      <button
        className={ProductFilterStyle.filter}
        onClick={() => setOpenedStatusFilter(!isOpenedFilter)}
        data-test-id="filter-button"
        type="button"
      >
        <div className={ProductFilterStyle.filterStatus}>
          {isOpenedFilter ? <FilterOpened /> : <FilterClosed />}
        </div>
        <p>Filter</p>
      </button>
      <div className={ProductFilterStyle.viewStyle}>
        <div
          onClick={() => setViewStyle("grid")}
          className={ProductFilterStyle.viewStyleSvg}
        >
          {isListStyleActive ? <ViewListActive /> : <ViewList />}
        </div>
        <div
          onClick={() => setViewStyle("list")}
          className={ProductFilterStyle.viewStyleSvg}
        >
          {isListStyleActive ? <ViewGrid /> : <ViewGridActive />}
        </div>
      </div>
    </div>
  );
};

export default FilterBar;

FilterBar.propTypes = {
  isOpenedFilter: PropTypes.bool.isRequired,
  setOpenedStatusFilter: PropTypes.func.isRequired,
};
