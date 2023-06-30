import React from "react";
import Styles from "./HeaderMid.module.scss";
import SearchIcon from "./SearchIcon/SearchIcon";
import { ReactComponent as LogoSVG } from "@assets/svg/logo.svg";
import MidRight from "./MidRight";
import Navigation from "./Navigation";
import CatalogButton from "@components/buttons/CatalogButton/CatalogButton";

const HeaderMid = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.logo}>
        <LogoSVG />
      </div>
      <div className={Styles.midleft}>
        <div className={Styles.catalog}>
          <CatalogButton />
        </div>
        <div className={Styles.search}>
          <SearchIcon />
        </div>
        <div className={Styles.navigation}>
          <Navigation />
        </div>
      </div>
      <MidRight />
    </div>
  );
};

export default HeaderMid;
