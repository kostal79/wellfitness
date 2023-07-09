import React from "react";
import Styles from "./AboutSection.module.scss";
import UniversalLink from "@components/buttons/UniversalLink";
import { ReactComponent as MapSVG } from "@assets/svg/map.svg";

const AboutSection = () => {
  return (
    <section className={Styles.container}>
      <h4 className={Styles.title}>О компании</h4>
      <p className={Styles.text}>
        Надежный партнер с 2005 года для сотен компаний от Калининграда
        до Владивостока.
      </p>
      <p className={Styles.text}>
        Оптима Импорт — один из самых крупных импортеров фитнес-оборудования,
        эксклюзивно представляет на российском рынке ведущих мировых
        производителей: Sole Fitness, Optima Fitness, Halley, Marcy, SKI
        Simulator и др.
      </p>
      <p className={Styles.text}>
        Мы предлагаем широкий спектр самой современной и качественной продукции
        как для домашнего, так и для коммерческого фитнеса.
      </p>
      <span className={Styles.button}>
        <UniversalLink text="Подробнее о компании" styles="red-empty" />
      </span>

      <div className={Styles.map}>
        <MapSVG />
      </div>
    </section>
  );
};

export default AboutSection;
