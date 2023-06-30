import React from "react";
import Styles from "./AuthLogo.module.scss";
import { ReactComponent as AuthSVG } from "@assets/svg/avatar.svg";

const AuthLogo = () => {
  const isAuth = false;

  const clickHandler = () => {
    console.log("Auth clicked");
  };

  return (
    <div className={Styles.container}>
      <button className={Styles.button} onClick={clickHandler}>
        {isAuth ? "Выйти" : "Войти"}
      </button>
      <div className={Styles.avatar}>
        <AuthSVG />
      </div>
    </div>
  );
};

export default AuthLogo;
