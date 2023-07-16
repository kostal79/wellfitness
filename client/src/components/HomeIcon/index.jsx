import React from "react";
import Styles from "./HomeIcon.module.scss";
import { ReactComponent as HomeSVG } from "@assets/svg/home-icon.svg";
import { NavLink } from "react-router-dom";
import { HOME_PAGE } from "../../constants";

const HomeIcon = () => {
  return (
    <div className={Styles.container}>
      <NavLink to={HOME_PAGE}>
        <HomeSVG />
      </NavLink>
    </div>
  );
};

export default HomeIcon;
