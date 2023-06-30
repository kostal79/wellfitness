import React from "react";
import Styles from "./CatalogButton.module.scss";
import { ReactComponent as CatalogSVG } from "@assets/svg/catalog.svg";

const CatalogButton = () => {
  const clickHandler = () => {
    console.log("catalog clicked")
  }
  return (
    <button className={Styles.button} onClick={clickHandler}>
      <CatalogSVG />
      <span className={Styles.text}>Каталог</span>
    </button>
  );
};

export default CatalogButton;
