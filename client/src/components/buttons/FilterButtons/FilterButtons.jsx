import React, { useState } from "react";
import Styles from "./FilterButtons.module.scss";
import { useAsyncValue, useSearchParams } from "react-router-dom";
import FilterButton from "./FilterButton/FilterButton";
import FilterMobButton from "@components/buttons/FilterMobButton";
import SortButton from "@components/buttons/SortButton/SortButton";
import { useDispatch } from "react-redux";
import { showAsideModal } from "@redux/slices/modalSlices";


const FilterButtons = () => {
  const arr = useAsyncValue();
  const [searchParams, setSearchParams] = useSearchParams();
  const role = "diler"; //TODO
  const dispatch = useDispatch();

  const sortTypes = {
    "По новизне": "created_at",
    "По цене":
      role === "diler" ? "special_price.diler" : "special_price.retail",
    "По рейтингу": "rating_average",
  };

  const isActiveSort = (value) => {
    return searchParams.get("sort") === value;
  };

  const activateSort = (value) => {
    searchParams.set("sort", value);
    setSearchParams(searchParams);
  };

  const changeSortOrder = () => {
    const isAscending = searchParams.get("ascending");
    if (isAscending === "true") {
      searchParams.set("ascending", false);
    } else {
      searchParams.set("ascending", true);
    }
    setSearchParams(searchParams);
  };

  const sortButtonsDisplay = () => {
    const res = [];
    for (let [key, value] of Object.entries(sortTypes)) {
      res.push(
        <SortButton
          value={key}
          isActive={isActiveSort(value)}
          onClick={() => activateSort(value)}
          isAscending={searchParams.get("ascending") === "true"}
          setIsAscending={changeSortOrder}
          key={key}
        />
      );
    }
    return res;
  };

  const showModal = () => {
    dispatch(showAsideModal())
  };

  const buttons = arr.map((item) => {
    const name = item.name;
    const itemId = item._id;
    return (
      <FilterButton
        text={name}
        to={`${itemId}?ascending=true&sort=created_at`}
        key={itemId}
      />
    );
  });
  return (
    <>
      <div className={Styles.container}>
        <div className={Styles["types-buttons"]}>{buttons}</div>
        <nav className={Styles["filter-navigation--mobile"]}>
          <FilterMobButton onClick={showModal} />
          {sortButtonsDisplay()}
        </nav>
      </div>
    </>
  );
};

export default FilterButtons;
