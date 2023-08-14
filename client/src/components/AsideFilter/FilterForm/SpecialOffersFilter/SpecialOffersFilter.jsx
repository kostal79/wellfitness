import React from "react";
import Styles from "../../AsideFilter.module.scss";
import { useSearchParams } from "react-router-dom";

const SpecialOffersFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const changeHandler = (event) => {
    const { name, checked } = event.target;
    if (checked) {
      searchParams.set(name, true);
      setSearchParams(searchParams);
    } else {
      searchParams.delete(name);
      setSearchParams(searchParams);
    }
  };

  const isChecked = (event) => {
    const { name } = event.target;
    console.log(searchParams.get(name))
    if (searchParams.get(name)) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      <li className={Styles["list-item"]}>
        <input
          className={Styles.input}
          type="checkbox"
          name={"profit"}
          checked={searchParams.get("profit") === "true"}
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
          checked={searchParams.get("new") === "true"}
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
          checked={searchParams.get("inStock") === "true"}
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
          checked={searchParams.get("recommend") === "true"}
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
