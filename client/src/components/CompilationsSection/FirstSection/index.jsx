import React from "react";
import Styles from "./FirstSection.module.scss";
import dial from "@assets/images/dial.png";
import logoMax from "@assets/images/max-trainer.png";
import compilations1 from "@assets/images/compilations1.png";
import { NavLink } from "react-router-dom";

const FirstSection = () => {
  return (
    <NavLink to="/">
      <section className={Styles.section}>
        <div className={Styles.cover}>
          <p>
            Лучшие тренажеры для <span>жиросжигания</span>
          </p>
          <div className={Styles["training-time"]}>
            <img className={Styles.dial} src={dial} alt="dial" />
            <p>
              Тренировка
              <br />
              всего
              <br />
              <span>14 минут</span>
            </p>
          </div>
          <img className={Styles.logo} src={logoMax} alt="logo Max" />
        </div>
        <div className={Styles["image-box"]}>
          <img className={Styles.image} src={compilations1} alt="step" />
        </div>
      </section>
    </NavLink>
  );
};

export default FirstSection;
