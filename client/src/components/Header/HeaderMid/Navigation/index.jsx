import React from "react";
import Styles from "./Navigation.module.scss";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className={Styles.container}>
      <nav className={Styles.menu}>
        <ul className={Styles["menu_list"]}>
          <li className={Styles["menu_item"]}>
            <NavLink to={"/brands"}>Бренды</NavLink>
          </li>
          <li className={Styles["menu_item"]}>
            <NavLink to={"/servicerequest"}>Сервис</NavLink>
          </li>
          <li className={Styles["menu_item"]}>
            <NavLink to={"/consalting"}>Услуги</NavLink>
          </li>
          <li className={Styles["menu_item"]}>
            <NavLink >Поддержка</NavLink>
          </li>
          <li className={Styles["menu_item"]}>
            <NavLink to={"/about"}>О компании</NavLink>
          </li>
          <li className={Styles["menu_item"]}>
            <NavLink to={"/blog"}>Блог</NavLink>
          </li>
          <li className={Styles["menu_item"]}>
            <NavLink to={"/showrooms"}>Где купить</NavLink>
          </li>
          <li className={Styles["menu_item"]}>
            <NavLink to={"/contacts"}>Контакты</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
