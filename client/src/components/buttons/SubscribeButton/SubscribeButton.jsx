import React from "react";
import { ReactComponent as PlaneSVG } from "@assets/svg/paper-plane.svg";
import Styles from "./SubscribeButton.module.scss";

const SubscribeButton = () => {
  return (
    <button className={Styles.button}>
      <span className={Styles.text}>Подписаться на рассылку</span>
      <span className={Styles.svg}>
        <PlaneSVG />
      </span>
    </button>
  );
};

export default SubscribeButton;
