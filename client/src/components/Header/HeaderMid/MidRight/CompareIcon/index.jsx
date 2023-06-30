import React from "react";
import Styles from "./CompareIcon.module.scss";
import { ReactComponent as CompareSVG } from "@assets/svg/compare.svg";

const CompareIcon = ({ quantity }) => {
  const clickHandler = () => {
    console.log("Compare clicked")
  }
  return (
    <div className={Styles.container} onClick={clickHandler}>
      <CompareSVG />
      {quantity && <div className={Styles.circle}>{quantity}</div>}
    </div>
  );
};

export default CompareIcon;
