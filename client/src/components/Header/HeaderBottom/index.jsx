import React, { useState } from "react";
import Styles from "./HeaderBottom.module.scss";
import { ReactComponent as PolygonSVG } from "@assets/svg/polygon.svg";

const HeaderBottom = () => {
  const [activeSearch, setActiveSearch] = useState();

  const onClickHandler = (value) => {
    return function () {
      setActiveSearch(value);
    };
  };

  const borderHandler = (value) => {
    if (activeSearch === value) {
      return "6px solid #F53B49";
    }
    return "6px solid transparent";
  };

  return (
    <div className={Styles.wrapper}>
      <div className={Styles.container}>
        <button
          id={Styles["filter_home"]}
          className={Styles.button}
          onClick={onClickHandler("home")}
          style={{
            borderBottom: borderHandler("home"),
          }}
        >
          <span className={Styles.text}>Для дома</span>
          <PolygonSVG />
        </button>
        <button
          className={Styles.button}
          onClick={onClickHandler("prof")}
          style={{
            borderBottom: borderHandler("prof"),
          }}
        >
          <span className={Styles.text}>Для фитнес клуба</span>
          <PolygonSVG />
        </button>
      </div>
    </div>
  );
};

export default HeaderBottom;
