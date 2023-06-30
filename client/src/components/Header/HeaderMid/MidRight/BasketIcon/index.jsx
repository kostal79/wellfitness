import React from "react";
import Styles from "./BasketIcon.module.scss";
import { ReactComponent as BasketSVG } from "@assets/svg/basket.svg";

const BasketIcon = ({ quantity }) => {
  const onClickHandler = () => {
    console.log("Basket clicked");
  };
  return (
    <div className={Styles.container} onClick={onClickHandler}>
      <BasketSVG />
      {quantity && <div className={Styles.circle}>{quantity}</div>}
    </div>
  );
};

export default BasketIcon;
