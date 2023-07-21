import React from "react";
import Styles from "./FilterButton.module.scss";
import { NavLink } from "react-router-dom";

const FilterButton = ({ to, text }) => {
  return (
    <NavLink
      to={to}
      text={text}
      className={({ isActive, isPending }) =>
        isPending
          ? Styles["pending"]
          : isActive
          ? Styles["active"]
          : Styles["inactive"]
      }
    >
      {text}
    </NavLink>
  );
};

export default FilterButton;
