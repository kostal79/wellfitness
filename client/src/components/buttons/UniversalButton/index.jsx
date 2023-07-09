import React from "react";
import Styles from "./UniversalButton.module.scss";

/**
 * @component
 * @param {string} text text inside button
 * @param {funct} click clickHandler
 * @param {string} styles  approved: "red-fill", "red-empty", "grey-fill", "white-empty", "grey-empty"

 *  
 * @description Universal button 
 */

const UniversalButton = ({ text, click, styles }) => {
  const secondClassName = "button--" + String(styles);
  return (
    <button
      className={`${Styles.button} ${Styles[secondClassName]}`}
      onClick={click}
    >
      {text}
    </button>
  );
};

export default UniversalButton;
