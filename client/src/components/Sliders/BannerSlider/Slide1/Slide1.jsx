import React from "react";
import Styles from "./Slide1.module.scss";
import image29 from "@assets/images/Group734.png";
import UniversalButton from "@components/buttons/UniversalButton";

const Slide1 = () => {
  return (
    <div className={Styles["slide_container"]}>
      <section className={Styles.infoblock}>
        <p className={Styles.title}>Zero Runner</p>
        <p className={Styles.text}>
          Бег с нулевой ударной нагрузкой <span>на суставы</span>
        </p>
        <UniversalButton text={"Узнать больше"} styles={"red-empty"} />
      </section>
      <img className={Styles.image} src={image29} alt="running girl" loading="lazy"/>
    </div>
  );
};

export default Slide1;
