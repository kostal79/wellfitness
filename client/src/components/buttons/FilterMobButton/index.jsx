import React from 'react';
import Styles from "./FilterMobButton.module.scss"
import { ReactComponent as FilterSVG } from "@assets/svg/filter.svg";

const FilterMobButton = ({onClick}) => {
    return (
      <>
      <button className={Styles["filter__button"]} onClick={onClick}>
        <span className={Styles["filter__content"]}>
          <FilterSVG /> Фильтр
        </span>
      </button>
    </>
    );
}

export default FilterMobButton