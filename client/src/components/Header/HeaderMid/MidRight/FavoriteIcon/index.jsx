import React from "react";
import Styles from "./FavoriteIcon.module.scss";
import { ReactComponent as HeartSVG } from "@assets/svg/heart.svg";

const FavoriteIcon = ({ quantity }) => {
  const onClickHandler = () => {
    console.log("Favorite clicked");
  };
  return (
    <div className={Styles.container} onClick={onClickHandler}>
      <HeartSVG />
      {quantity && <div className={Styles.circle}>{quantity}</div>}
    </div>
  );
};

export default FavoriteIcon;
