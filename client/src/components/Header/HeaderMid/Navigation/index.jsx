import React from "react";
import Styles from "./Navigation.module.scss";
import { NavLink } from "react-router-dom";
import { ABOUT_PAGE, BLOG_PAGE, BRANDS_PAGE, CONSALTING_PAGE, CONTACTS_PAGE, SERVICE_PAGE, SHOWROOMS_PAGE, SUPPORT_PAGE } from "../../../../constants";

const Navigation = () => {
  return (
    <div className={Styles.container}>
      <nav className={Styles.menu}>
        <ul className={Styles["menu_list"]}>
          <li className={Styles["menu_item"]}>
            <NavLink to={BRANDS_PAGE}>Бренды</NavLink>
          </li>
          <li className={Styles["menu_item"]}>
            <NavLink to={SERVICE_PAGE}>Сервис</NavLink>
          </li>
          <li className={Styles["menu_item"]}>
            <NavLink to={CONSALTING_PAGE}>Услуги</NavLink>
          </li>
          <li className={Styles["menu_item"]}>
            <NavLink to={SUPPORT_PAGE}>Поддержка</NavLink>
          </li>
          <li className={Styles["menu_item"]}>
            <NavLink to={ABOUT_PAGE}>О компании</NavLink>
          </li>
          <li className={Styles["menu_item"]}>
            <NavLink to={BLOG_PAGE}>Блог</NavLink>
          </li>
          <li className={Styles["menu_item"]}>
            <NavLink to={SHOWROOMS_PAGE}>Где купить</NavLink>
          </li>
          <li className={Styles["menu_item"]}>
            <NavLink to={CONTACTS_PAGE}>Контакты</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
