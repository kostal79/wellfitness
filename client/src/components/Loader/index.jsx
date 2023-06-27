import React from "react";
import Styles from "./Loader.module.scss"

const Loader = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles["lds-ellipsis"]}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
