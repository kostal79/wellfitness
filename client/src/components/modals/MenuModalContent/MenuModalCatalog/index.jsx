import React from "react";
import Styles from "./MenuModalCatalog.module.scss";
import { NavLink } from "react-router-dom";
import { ReactComponent as ArrowSVG } from "@assets/svg/right-arrow.svg";
import {
  CATALOG_PAGE_FOR_FITNESS_CENTER,
  CATALOG_PAGE_FOR_HOME,
} from "../../../../constants";

const MenuModalCatalog = () => {
  return (
    <nav className={Styles.navigation}>
      <h2 className={Styles.title}>Каталог</h2>
      <ul className={Styles.list}>
        <li className={Styles.item}>
          <NavLink to={CATALOG_PAGE_FOR_HOME}>
            <span className={Styles.text}>Для дома</span>
            <ArrowSVG />
          </NavLink>
        </li>
        <li className={Styles.item}>
          <NavLink to={CATALOG_PAGE_FOR_FITNESS_CENTER}>
            <span className={Styles.text}>Для фитнес клубов</span>
            <ArrowSVG />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MenuModalCatalog;
