import React from "react";
import Styles from "./Header.module.scss";
import HeaderUpper from "./HeaderUpper";
import HeaderMid from "./HeaderMid";
import HeaderBottom from "./HeaderBottom";

const Header = () => {
  return (
    <header className={Styles.header}>
      <div className={Styles.container}>
        <div className={Styles.upper}>
          <HeaderUpper />
        </div>
        <div className={Styles.mid}>
          <HeaderMid />
        </div>
      </div>
        <HeaderBottom />
    </header>
  );
};

export default Header;
