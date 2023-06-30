import React from "react";
import Styles from "./MenuModalContent.module.scss";
import SelectCityButton from "@components/buttons/SelectCityButton/SelectCityButton";
import AuthLogo from "@components/Header/HeaderUpper/AuthLogo";
import { ReactComponent as CloseSVG } from "@assets/svg/close.svg";
import SearchInput from "@components/SearchInput";
import MenuModalCatalog from "./MenuModalCatalog";
import Navigation from "@components/Header/HeaderMid/Navigation";
import CallRequestButton from "@components/buttons/CallRequestButton/CallRequestButton";
import ForDillers from "@components/Header/HeaderUpper/ForDillers";

const MenuModalContent = ({close}) => {

  const handleClose = (event) => {
    if (event.target.className === Styles.underlayer) {
      close()
    }
  }

  return (
    <div className={Styles.container}>
      <div className={Styles.underlayer} onClick={handleClose}>
        <div className={Styles.content}>
          <div className={Styles.upper}>
            <SelectCityButton />
            <AuthLogo />
            <div className={Styles.close} onClick={close}>
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
            <a className={Styles.tel} type="tel">+7 (800) 000-00-00</a>
            <CallRequestButton />
          </div>
          <div className={Styles.dillers}>
            <ForDillers />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuModalContent;
