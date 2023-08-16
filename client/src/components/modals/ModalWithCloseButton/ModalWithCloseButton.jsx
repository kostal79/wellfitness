import React, { useState } from "react";
import Styles from "./ModalWithCloseButton.module.scss";
import { ReactComponent as CloseSVG } from "@assets/svg/close.svg";

const ModalWithCloseButton = ({ children, onClose }) => {
  const [isOpen, setIsOpen] = useState(true);

  const close = () => {
    setIsOpen(false);
    setTimeout(onClose, 300);
  }
  return (
    <div className={isOpen ? Styles.underlayer : Styles["underlayer--disactive"]}>
      <div className={isOpen ? Styles.container : Styles["container--disactive"]}>
        <i className={Styles.icon} onClick={close}>
          <CloseSVG className={Styles.svg} />
        </i>
        {children}
      </div>
    </div>
  );
};

export default ModalWithCloseButton;
