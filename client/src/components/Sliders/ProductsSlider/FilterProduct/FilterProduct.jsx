import React from "react";
import Styles from "./FilterProduct.module.scss";

const FilterProduct = ({ parameter, setParameter }) => {
  const giveClassName = (param) => {
    if (param === parameter) {
      return Styles["filter--active"];
    } else {
      return Styles.filter;
    }
  };

  const clickHandler = (param) => {
    setParameter(param);
  };

  return (
    <div className={Styles.container}>
      <p
        className={giveClassName("sign_profit")}
        onClick={() => clickHandler("sign_profit")}
      >
        Акция
      </p>
      <p
        className={giveClassName("sign_new")}
        onClick={() => clickHandler("sign_new")}
      >
        Новинки
      </p>
      <p
        className={giveClassName("sign_recomend")}
        onClick={() => clickHandler("sign_recomend")}
      >
        Мы рекомендуем
      </p>
    </div>
  );
};

export default FilterProduct;
