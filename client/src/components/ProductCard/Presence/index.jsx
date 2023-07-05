import React from "react";
import Styles from "./Presence.module.scss";
import { ReactComponent as CircleSVG } from "@assets/svg/circle.svg";
import { ReactComponent as CircleEmptySVG } from "@assets/svg/empty-circle.svg";

const Presence = ({ quantity }) => {
  const circlesArray = [];
  for (let i = 0; i < quantity; i++) {
    circlesArray.push(
      <span className={Styles["filled-circle"]} key={`presence${i}`}>
        <CircleSVG />
      </span>
    );
  }

  for (let i = 0; i < 3 - quantity; i++) {
    circlesArray.push(
      <span className={Styles["empty-circle"]} key={`presence-empty${i}`}>
        <CircleEmptySVG />
      </span>
    );
  }
  let text;
  if (quantity >= 2) {
    text = <p className={Styles["presence_text"]}>В наличии</p>;
  } else if (quantity === 1) {
    text = <p className={Styles["presence_text"]}>Осталось мало</p>;
  } else {
    text = <p className={Styles["presence_text"]}>Нет в наличии</p>;
  }
  if (quantity > 1) {
    return (
      <div className={Styles["presence_quantity"]}>
        {text}
        {circlesArray}
      </div>
    );
  } else if (quantity === 1) {
    return (
      <div
        className={`${Styles["presence_quantity"]} ${Styles["presence_quantity--few"]}`}
      >
        {text}
        {circlesArray}
      </div>
    );
  } else {
    return (
      <div
        className={`${Styles["presence_quantity"]} ${Styles["presence_quantity--inactive"]}`}
      >
        {text}
        {circlesArray}
      </div>
    );
  }
};

export default Presence;
