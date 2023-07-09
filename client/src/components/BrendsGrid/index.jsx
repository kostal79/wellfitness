import React, { useState } from "react";
import Styles from "./BrendsGrid.module.scss";
import { ReactComponent as BrendSVG } from "@assets/svg/Nautilus.svg";
import {NavLink} from "react-router-dom"
import UniversalLink from "../buttons/UniversalLink"

const BrendsGrid = () => {
  const [filter, setFilter] = useState("Беговые дорожки");

  const filterHandler = (value) => {
    setFilter(value);
  };

  const classNameItem = (value) => {
    const classNames = [Styles["list_item"]];
    if (value === filter) {
      classNames.push(Styles["list_item--active"]);
    }
    return classNames.join(" ");
  };

  const filterList = (list) => {
    return list.map((item) => {
      return (
        <li
          className={classNameItem(item)}
          onClick={() => filterHandler(item)}
          key={item}
        >
          {item}
        </li>
      );
    });
  };

  const brendList = () => {
    const list = [];
    for (let i = 0; i < 12; i++) {
      list.push(
        <NavLink to="/" key={i}>
          <div className={Styles["grid-cell"]} >
            <BrendSVG />
          </div>
        </NavLink>
      );
    }
    return list;
  };

  return (
    <div className={Styles.container}>
      <h3 className={Styles.title}>Популярные бренды</h3>
      <ul className={Styles.list}>
        {filterList([
          "Беговые дорожки",
          "Эллиптические тренажеры",
          "Велотренажеры",
          "Силовые тренажеры",
          "Батуты",
          "Игровые столы"
        ])}
      </ul>
      <div className={Styles.grid}>{brendList()}</div>
      <div className={Styles.button} >
        <UniversalLink text="Все бренды" styles="red-empty" />
      </div>
    </div>
  );
};

export default BrendsGrid;
