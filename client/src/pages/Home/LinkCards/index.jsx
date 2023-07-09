import React from "react";
import Styles from "./LinkCards.module.scss";
import { ReactComponent as ShareSVG } from "@assets/svg/share.svg";
import { ReactComponent as RequestSVG } from "@assets/svg/request.svg";
import { ReactComponent as GymSVG } from "@assets/svg/gym.svg";
import { ReactComponent as CabinetSVG } from "@assets/svg/cabinet.svg";
import { ReactComponent as LinkArrowSVG } from "@assets/svg/link-arrow.svg";
import { NavLink } from "react-router-dom";
import phoneImage from "@assets/images/phone.png"

const LinkCards = () => {
  return (
    <div className={Styles.container}>
      <section className={Styles.section}>
        <div className={Styles["image_container"]}>
          <ShareSVG />
        </div>
        <h5 className={Styles.title}>Помощь покупателю</h5>
        <p className={Styles.text}>
          Узнайте как приобрести товар, способы доставки и оплаты, а также
          условия гарантии.
        </p>
        <NavLink to="/">
          <p className={Styles.link}>
            Подробнее <LinkArrowSVG />
          </p>
        </NavLink>
      </section>
      <section className={Styles.section}>
        <div className={Styles["image_container"]}>
          <RequestSVG />
        </div>
        <h5 className={Styles.title}>Заявка на сервис</h5>
        <p className={Styles.text}>
          Оставьте заявку на проведение гарантийного и постгарантийного ремонта.
        </p>
        <NavLink to="/">
          <p className={Styles.link}>
            Подробнее <LinkArrowSVG />
          </p>
        </NavLink>
      </section>
      <section className={Styles.section}>
        <div className={Styles.subsection}>
          <div className={Styles["image_container"]}>
            <CabinetSVG />
          </div>
          <h5 className={Styles.title}>Выставочный зал</h5>
          <p className={Styles.text}>
            Оставьте заявку на посещение шоу-рума в Москве
          </p>
          <NavLink to="/">
            <p className={Styles.link}>
              Подробнее <LinkArrowSVG />
            </p>
          </NavLink>
        </div>
        <div className={Styles["phone-image_box"]}>
          <img className={Styles["phone-image"]} src={phoneImage} alt="phone image" />
        </div>
      </section>
      <section className={Styles.section}>
        <div className={Styles["image_container"]}>
          <GymSVG />
        </div>
        <h5 className={Styles.title}>Выставочный зал</h5>
        <p className={Styles.text}>
          Оставьте заявку на посещение шоу-рума в Москве
        </p>
        <NavLink to="/">
          <p className={Styles.link}>
            Подробнее <LinkArrowSVG />
          </p>
        </NavLink>
      </section>
    </div>
  );
};

export default LinkCards;
