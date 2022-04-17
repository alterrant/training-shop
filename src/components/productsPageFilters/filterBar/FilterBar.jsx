import ProductFilterStyle from "./FilterBar.module.css";
import {ReactComponent as FilterOpened} from "../../../assets/SVG/filterOpened.svg";
import {ReactComponent as FilterClosed} from "../../../assets/SVG/filterClosed.svg";
import {ReactComponent as ViewList} from "../../../assets/SVG/viewList.svg";
import {ReactComponent as ViewListActive} from "../../../assets/SVG/viewListActive.svg";
import {ReactComponent as ViewGrid} from "../../../assets/SVG/viewGrid.svg";
import {ReactComponent as ViewGridActive} from "../../../assets/SVG/viewGridActive.svg";
import {useState} from "react";

const FilterBar = ({isOpenedFilter, setOpenedStatusFilter}) => {
  const [viewStyle, changeViewStyle] = useState('grid');

  const isListStyleActive = (viewStyle === 'list');

  const setViewStyle = (viewStyle) => {
    if (viewStyle === 'list') return changeViewStyle('grid');
    changeViewStyle('list');
  }

  return (
      <div className={ProductFilterStyle.wrapper}>
        <button className={ProductFilterStyle.filter}
                onClick={() => setOpenedStatusFilter(!isOpenedFilter)}
                data-test-id='filter-button'>
          <div className={ProductFilterStyle.filterStatus}>
            {isOpenedFilter ? <FilterOpened/> : <FilterClosed/>}
          </div>
          <p>Filter</p>
        </button>
        <div className={ProductFilterStyle.viewStyle}>
          <div onClick={() => setViewStyle('grid')}
               className={ProductFilterStyle.viewStyleSvg}>{isListStyleActive ? <ViewListActive/> : <ViewList/>}</div>
          <div onClick={() => setViewStyle('list')}
               className={ProductFilterStyle.viewStyleSvg}>{isListStyleActive ? <ViewGrid/> : <ViewGridActive/>}</div>
        </div>
      </div>
  )
}

export default FilterBar;