import React from "react";
import Styles from "./UniversalLink.module.scss";
import { NavLink } from "react-router-dom";

/**
 * @component
 * @param {string} text text inside button
 * @param {string} styles  approved: "red-fill", "red-empty", "grey-fill", "grey-empty"
 * @param {string} linkTo link to 

 *  
 * @description Universal button 
 */

const UniversalLink = ({ text, styles, linkTo }) => {
  const secondClassName = "button--" + String(styles);
  return (
    <NavLink to={linkTo} >
    <div
      className={`${Styles.button} ${Styles[secondClassName]}`}
    >
      {text}
    </div>
    </NavLink>
  );
};

export default UniversalLink;
