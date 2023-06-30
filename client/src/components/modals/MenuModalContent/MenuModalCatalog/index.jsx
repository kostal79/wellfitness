import React from "react";
import Styles from "./MenuModalCatalog.module.scss";
import { NavLink } from "react-router-dom";
import { ReactComponent as ArrowSVG } from "@assets/svg/arrow2.svg";
import { CATALOG_FOR_FITNESS_CENTER, CATALOG_FOR_HOME } from "../../../../constants";

const MenuModalCatalog = () => {
  return (
    <nav className={Styles.navigation}>
      <h2 className={Styles.title}>Каталог</h2>
      <ul className={Styles.list}>
        <NavLink to={CATALOG_FOR_HOME}>
          <li className={Styles.item}>
            <span className={Styles.text}>Для дома</span>
            <ArrowSVG />
          </li>
        </NavLink>
        <NavLink to={CATALOG_FOR_FITNESS_CENTER}>
          <li className={Styles.item}>
            <span className={Styles.text}>Для фитнес клубов</span>
            <ArrowSVG />
          </li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default MenuModalCatalog;
