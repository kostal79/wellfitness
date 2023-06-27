import React from "react";
import Styles from "./BottomSection.module.scss";
import { ReactComponent as InstagramLogo } from "@assets/svg/instagram.svg";
import { ReactComponent as FacebookLogo } from "@assets/svg/akar-icons_facebook-fill.svg";
import { ReactComponent as YouTubeLogo } from "@assets/svg/entypo-social_youtube-with-circle.svg";
import logoMobile from "@assets/images/logo-footer-mobile.png";
import logoDisplay from "@assets/images/logo-footer.png";
import { ReactComponent as VisaLogo } from "@assets/svg/visa-logo.svg";
import { ReactComponent as MastercardLogo } from "@assets/svg/mastercard.svg";
import { ReactComponent as WebMoneyLogo } from "@assets/svg/web-money.svg";
import { ReactComponent as PayPalLogo } from "@assets/svg/paypal-logo.svg";

const BottomSection = () => {
  return (
    <section className={Styles.section}>
      <ul className={Styles.social}>
        <li className={Styles.items}><a href={"https://www.instagram.com/thecatsfervor/"}><InstagramLogo /></a></li>
        <li className={Styles.items}><a href={"https://www.facebook.com"}><FacebookLogo /></a></li>
        <li className={Styles.items}><a href={"https://www.youtube.com"}><YouTubeLogo /></a></li>
      </ul>
      <picture className={Styles.picture}>
        <source srcSet={logoMobile} media="(max-width: 979px)" />
        <img src={logoDisplay} alt="Logo" />
      </picture>
      <p className={Styles.text}>© WellFitness. 2007 Все права защищены</p>
      <ul className={Styles.payments}>
        <li className={Styles.items}><VisaLogo /></li>
        <li className={Styles.items}><MastercardLogo /></li>
        <li className={Styles.items}><WebMoneyLogo /></li>
        <li className={Styles.items}><PayPalLogo /></li>
      </ul>
    </section>
  );
};

export default BottomSection;
