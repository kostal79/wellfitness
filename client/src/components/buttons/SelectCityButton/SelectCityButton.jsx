import React from "react";
import Styles from "./SelectCityButton.module.scss";
import {ReactComponent as PolygonSVG} from "@assets/svg/polygon1.svg"

const SelectCityButton = () => {
  const city = "Москва"

  const clickHandler = () => {
    console.log("Select city clicked")
  }

  return (
    <button className={Styles.button} onClick={clickHandler}>
      <span className={Styles.text}>{city}</span>
      <PolygonSVG />
    </button>
  );
};

export default SelectCityButton;
