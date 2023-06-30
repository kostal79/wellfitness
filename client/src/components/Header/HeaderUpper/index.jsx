import React from "react";
import Styles from "./HeaderUpper.module.scss";
import AuthLogo from "./AuthLogo";
import PhoneContacts from "./PhoneContacts";
import ForDillers from "./ForDillers";
import { ReactComponent as LogoSVG } from "@assets/svg/logo.svg";
import SelectCityButton from "../../buttons/SelectCityButton/SelectCityButton";
import {NavLink} from "react-router-dom"

const HeaderUpper = () => {
  
  return (
    <div className={Styles.container}>
      <div className={Styles["left-side"]}>
        <NavLink to={"/"}>
          <LogoSVG />
        </NavLink>
        <SelectCityButton />
      </div>
      <div className={Styles["right-side"]}>
        <ForDillers />
        <PhoneContacts />
        <AuthLogo />
      </div>
    </div>
  );
};

export default HeaderUpper;
