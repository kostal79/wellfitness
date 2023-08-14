import React from "react";
import Styles from "./SortButton.module.scss";
import { ReactComponent as SortIconSVG } from "@assets/svg/sort-icon.svg";

const SortButton = ({
  value,
  isActive,
  onClick,
  setIsAscending,
  isAscending,
}) => {
  return (
    <div className={Styles.container}>
      {isActive && (
        <SortIconSVG
          className={isAscending ? Styles["icon-asc"] : Styles["icon-desc"]}
          onClick={setIsAscending}
        />
      )}
      <button className={Styles.button} onClick={onClick}>
        <span className={Styles.content}>{value}</span>
      </button>
    </div>
  );
};

export default SortButton;
