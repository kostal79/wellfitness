import React, { useState } from "react";
import Styles from "./Burger.module.scss";
import { ReactComponent as BurgerSVG } from "@assets/svg/burger.svg";
import MenuModalContent from "@components/modals/MenuModalContent";
import { createPortal } from "react-dom";
const Burger = () => {
  const [showModal, setShowModal] = useState(false);

  const onOpen = () => {
    setShowModal(true);
  };

  const onClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <button className={Styles.container} onClick={onOpen}>
        <BurgerSVG />
      </button>
      {showModal &&
        createPortal(<MenuModalContent close={onClose} />, document.body)}
    </>
  );
};

export default Burger;
