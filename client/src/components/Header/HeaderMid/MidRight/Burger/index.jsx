import React from 'react';
import Styles from "./Burger.module.scss"
import {ReactComponent as BurgerSVG} from "@assets/svg/burger.svg"

const Burger = () => {
  const onClickHandler = () => {
    console.log("Hamburger clicked")
  }
    return (
      <div className={Styles.container} onClick={onClickHandler}>
          <BurgerSVG/>
      </div>
    );
}

export default Burger