import React from "react";
import Styles from "./SecondSection.module.scss";
import compilations2 from "@assets/images/compilations2.png";
import { NavLink } from "react-router-dom";

const SecondSection = () => {
  return (
    <NavLink to="/">
      <section className={Styles.section}>
        <div className={Styles.layer}>
          <p>
            Кардио - силовая тренировка
            <br />
            <span>2 в 1</span>
          </p>
        </div>
        <img className={Styles.image} src={compilations2} alt="step" />
      </section>
    </NavLink>
  );
};

export default SecondSection;
