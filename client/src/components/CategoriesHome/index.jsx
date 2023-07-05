import React from "react";
import Styles from "./CategoriesHome.module.scss";
import { NavLink } from "react-router-dom";
import treadmill from "@assets/images/treadmill.png";
import bike from "@assets/images/bike.png";
import ellipse from "@assets/images/ellipse.png";
import ski from "@assets/images/ski.png";
import strength from "@assets/images/strength.png";
import rowing from "@assets/images/rowing.png";
import trampoline from "@assets/images/trampoline.png";
import tables from "@assets/images/tables.png";
import massage from "@assets/images/massage.png";
import accessoires from "@assets/images/accessoires.png";
import UniversalButton from "@components/buttons/UniversalButton";

const CategoriesHome = () => {
  return (
    <div className={Styles.container}>
      <h3 className={Styles.title}>Тренажеры для дома</h3>
      <ul className={Styles.list}>
        <li className={Styles["list_item"]}>
          <NavLink to="/">
            <div className={Styles.layer}>
              <p className={Styles.category}>Беговые<br/>дорожки</p>
              <img className={Styles.image} src={treadmill} alt="category"/>
            </div>
          </NavLink>
        </li>
        <li className={Styles["list_item"]}>
          <NavLink to="/">
            <div className={Styles.layer}>
              <p className={Styles.category}>Эллиптические<br/>тренажеры</p>
              <img className={Styles.image} src={ellipse}  alt="category" />
            </div>
          </NavLink>
        </li>
        <li className={Styles["list_item"]}>
          <NavLink to="/">
            <div className={Styles.layer}>
              <p className={Styles.category}>Велотренажеры</p>
              <img className={Styles.image} src={bike}  alt="category" />
            </div>
          </NavLink>
        </li>
        <li className={Styles["list_item"]}>
          <NavLink to="/">
            <div className={Styles.layer}>
              <p className={Styles.category}>Горнолыжные<br/>тренажеры</p>
              <img className={Styles.image} src={ski}  alt="category" />
            </div>
          </NavLink>
        </li>
        <li className={Styles["list_item"]}>
          <NavLink to="/">
            <div className={Styles.layer}>
              <p className={Styles.category}>Силовые<br/>тренажеры</p>
              <img className={Styles.image} src={strength}  alt="category" />
            </div>
          </NavLink>
        </li>
        <li className={Styles["list_item"]}>
          <NavLink to="/">
            <div className={Styles.layer}>
              <p className={Styles.category}>Батуты</p>
              <img className={Styles.image} src={trampoline}  alt="category" />
            </div>
          </NavLink>
        </li>
        <li className={Styles["list_item"]}>
          <NavLink to="/">
            <div className={Styles.layer}>
              <p className={Styles.category}>Игровые<br/>столы</p>
              <img className={Styles.image} src={tables}  alt="category" />
            </div>
          </NavLink>
        </li>
        <li className={Styles["list_item"]}>
          <NavLink to="/">
            <div className={Styles.layer}>
              <p className={Styles.category}>Гребные<br/>тренажеры</p>
              <img className={Styles.image} src={rowing}  alt="category"/>
            </div>
          </NavLink>
        </li>
        <li className={Styles["list_item"]}>
          <NavLink to="/">
            <div className={Styles.layer}>
              <p className={Styles.category}>Массажные<br/>кресла</p>
              <img className={Styles.image} src={massage}  alt="category"/>
            </div>
          </NavLink>
        </li>
        <li className={Styles["list_item"]}>
          <NavLink to="/">
            <div className={Styles.layer}>
              <p className={Styles.category}>Фитнес<br/>аксессуары </p>
              <img className={Styles.image} src={accessoires} alt="category" />
            </div>
          </NavLink>
        </li>
      </ul>
      <UniversalButton text="Все категории" styles={"red-empty"} />
    </div>
  );
};

export default CategoriesHome;
