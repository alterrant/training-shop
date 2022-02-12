import ProductFilterStyle from "./FilterBar.module.css";
import {ReactComponent as FilterOpened} from "../../assets/SVG/filterOpened.svg";
import {ReactComponent as FilterClosed} from "../../assets/SVG/filterClosed.svg";
import {ReactComponent as ViewList} from "../../assets/SVG/viewList.svg";
import {ReactComponent as ViewListActive} from "../../assets/SVG/viewListActive.svg";
import {ReactComponent as ViewGrid} from "../../assets/SVG/viewGrid.svg";
import {ReactComponent as ViewGridActive} from "../../assets/SVG/viewGridActive.svg";
import {ReactComponent as CaretDown} from "../../assets/SVG/caretDownIco.svg";
import {ReactComponent as CaretUp} from "../../assets/SVG/caretUpIco.svg";
import {useState} from "react";

const FilterBar = ({isOpenedFilter, setOpenedStatusFilter}) => {

  const [isSortTypeOpen, setSortTypeStatus] = useState(false);
  const [sortType] = useState('BESTSELLERS');
  const [viewStyle, changeViewStyle] = useState('grid');

  const isListStyleActive = (viewStyle === 'list');

  const setViewStyle = (viewStyle) => {
    if (viewStyle === 'list') return changeViewStyle('grid');
    changeViewStyle('list');
  }

  return (
      <div className={ProductFilterStyle.wrapper}>
        <div className={ProductFilterStyle.filter}>
          <div className={ProductFilterStyle.filterStatus}
               onClick={() => setOpenedStatusFilter(!isOpenedFilter)}>
            {isOpenedFilter ? <FilterOpened/> : <FilterClosed/>}
          </div>
          Filter
        </div>
        <div className={ProductFilterStyle.viewStyle}>
            <div onClick={() => setViewStyle('grid')}
                className={ProductFilterStyle.viewStyleSvg}>{isListStyleActive ? <ViewListActive/> : <ViewList/>}</div>
            <div onClick={() => setViewStyle('list')}
                className={ProductFilterStyle.viewStyleSvg}>{isListStyleActive ? <ViewGrid/> : <ViewGridActive/>}</div>
        </div>
        <div>
          <div className={ProductFilterStyle.filter}>
            {sortType}
            <div className={ProductFilterStyle.filterStatus}
                 onClick={() => setSortTypeStatus(!isSortTypeOpen)}>
              {isSortTypeOpen ? <CaretDown/> : <CaretUp/>}
            </div>
          </div>
        </div>
      </div>
  )
}

export default FilterBar;