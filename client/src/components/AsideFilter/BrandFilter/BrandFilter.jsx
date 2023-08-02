import React from "react";
import Styles from "../AsideFilter.module.scss";

const BrandFilter = ({ name, id, filter, setFilter }) => {
  const changeHandler = (event) => {
    if (event.target.checked) {
      setFilter((prevFilter) => ({
        ...prevFilter,
        brand: [...prevFilter.brand, id],
      }));
    } else {
      setFilter((prevFilter) => ({
        ...prevFilter,
        brand: prevFilter.brand.filter((brandId) => brandId !== id),
      }));
    }
  };
  return (
    <li className={Styles["list-item"]}>
      <input
        className={Styles.input}
        type="checkbox"
        name={name}
        value={id}
        checked={filter.brand.includes(id)}
        onChange={changeHandler}
      />
      <label className={Styles.label} htmlFor={name}>
        {name}
      </label>
    </li>
  );
};

export default BrandFilter;
