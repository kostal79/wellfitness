import React, { useState } from "react";
import Styles from "./MenuModalContent.module.scss";
import SelectCityButton from "@components/buttons/SelectCityButton/SelectCityButton";
import AuthLogo from "@components/Header/HeaderUpper/AuthLogo";
import { ReactComponent as CloseSVG } from "@assets/svg/close.svg";
import SearchInput from "@components/SearchInput";
import MenuModalCatalog from "./MenuModalCatalog";
import Navigation from "@components/Header/HeaderMid/Navigation";
import CallRequestButton from "@components/buttons/CallRequestButton/CallRequestButton";
import ForDillers from "@components/Header/HeaderUpper/ForDillers";

const MenuModalContent = ({ close }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = (event) => {
    if (event.target.className === Styles.underlayer) {
      close();
      setIsOpen(false);
    }
    if (event.target.closest("li") || event.target.closest("a") || event.target.closest("button")) {
      close();
      setIsOpen(false);
    } 
  };

  return (
    <div
      className={
        isOpen
          ? `${Styles.underlayer}`
          : `${Styles.underlayer} ${Styles["underlayer--closed"]}`
      }
      onClick={handleClose}
    >
      <div className={isOpen ? Styles.content : Styles.content_closed}>
        <div className={Styles.upper}>
          <SelectCityButton />
          <AuthLogo />
          <div className={Styles.close} onClick={() => {close(); setIsOpen(false)}}>
            <CloseSVG />
          </div>
        </div>
        <div className={Styles.search}>
          <SearchInput />
        </div>
        <div className={Styles.catalog}>
          <MenuModalCatalog />
        </div>
        <div className={Styles.navigation}>
          <Navigation />
        </div>
        <div className={Styles.contacts}>
          <a className={Styles.tel} href="tel:+78000000000">
            +7 (800) 000-00-00
          </a>
          <CallRequestButton />
        </div>
        <div className={Styles.dillers}>
          <ForDillers />
        </div>
      </div>
    </div>
  );
};

export default MenuModalContent;
