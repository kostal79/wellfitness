import React from "react";
import Styles from "./HeaderBottom.module.scss";
import { ReactComponent as PolygonSVG } from "@assets/svg/polygon.svg";
import { NavLink } from "react-router-dom";
import {
  CATALOG_FOR_FITNESS_CENTER,
  CATALOG_FOR_HOME,
} from "../../../constants";
import "./BorderStyle.scss";

const HeaderBottom = () => {
  const handleClassName = ({ isActive, isPending }) => {
    return isPending
      ? "HeaderBottom__link--pending"
      : isActive
      ? "HeaderBottom__link--active"
      : "HeaderBottom__link";
  };

  return (
    <div className={Styles.wrapper}>
      <ul className={Styles.container}>
        <NavLink to={CATALOG_FOR_HOME} className={handleClassName} end>
          <li id={Styles["filter_home"]} className={Styles.item}>
            <span className={Styles.text}>Для дома</span>
            <PolygonSVG />
          </li>
        </NavLink>
        <NavLink to={CATALOG_FOR_FITNESS_CENTER} className={handleClassName}>
          <li className={Styles.item}>
            <span className={Styles.text}>Для фитнес клуба</span>
            <PolygonSVG />
          </li>
        </NavLink>
      </ul>
    </div>
  );
};

export default HeaderBottom;
