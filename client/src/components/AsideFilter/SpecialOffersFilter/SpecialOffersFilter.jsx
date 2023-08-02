import React from "react";
import Styles from "../AsideFilter.module.scss";
import { useSearchParams } from "react-router-dom";

const SpecialOffersFilter = ({ filter, setFilter }) => {
  const changeHandler = (event) => {
    const { name, checked } = event.target;
    if (checked) {
      setFilter((prevFilter) => ({ ...prevFilter, [name]: true }));

    } else {
      setFilter((prevFilter) => ({ ...prevFilter, [name]: false }));
    }
  };

  return (
    <>
      <li className={Styles["list-item"]}>
        <input
          className={Styles.input}
          type="checkbox"
          name={"profit"}
          checked={filter.profit}
          onChange={changeHandler}
        />
        <label className={Styles.label} htmlFor={"profit"}>
          Акция
        </label>
      </li>
      <li className={Styles["list-item"]}>
        <input
          className={Styles.input}
          type="checkbox"
          name={"new"}
          checked={filter.new}
          onChange={changeHandler}
        />
        <label className={Styles.label} htmlFor={"new"}>
          Новинки
        </label>
      </li>
      <li className={Styles["list-item"]}>
        <input
          className={Styles.input}
          type="checkbox"
          name={"inStock"}
          checked={filter.inStock}
          onChange={changeHandler}
        />
        <label className={Styles.label} htmlFor={"inStock"}>
          В наличии
        </label>
      </li>
      <li className={Styles["list-item"]}>
        <input
          className={Styles.input}
          type="checkbox"
          name={"recommend"}
          checked={filter.recommend}
          onChange={changeHandler}
        />
        <label className={Styles.label} htmlFor={"recommend"}>
          Наш выбор
        </label>
      </li>
    </>
  );
};

export default SpecialOffersFilter;
