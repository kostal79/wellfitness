import React from "react";
import Styles from "./FilterButtons.module.scss";
import { useAsyncValue } from "react-router-dom";
import FilterButton from "./FilterButton/FilterButton";

const FilterButtons = () => {
  const arr = useAsyncValue()

  const buttons = arr.map((item) => {
    const name = item.name;
    const itemId = item._id;
    return (
      <FilterButton
        text={name}
        to={itemId}
        key={itemId}
      />
    );
  });
  return <div className={Styles.container}>{buttons}</div>;
};

export default FilterButtons;
