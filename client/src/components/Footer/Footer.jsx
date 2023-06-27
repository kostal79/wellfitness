import React from "react";
import Styles from "./Footer.module.scss";
import SectionCatalog from "./SectionCatalog";
import SectionSupport from "./SectionSupport";
import SectionService from "./SectionService";
import SectionAbout from "./SectionAbout";
import SubscribeButton from "../buttons/SubscribeButton/SubscribeButton";
import BecomePartnerButton from "../buttons/BecomePartnerButton/BecomePartnerButton";
import ForDillersButton from "../buttons/ForDillersButton/ForDillersButton";
import PhoneContacts from "./PhoneContacts/PhoneContacts";
import EmailContacts from "./EmailContacts/EmailContacts";
import Policy from "./Policy/Policy";
import BottomSection from "./BottomSection/BottomSection";

const Footer = () => {
  return (
    <footer className={Styles.footer}>
      <div className={Styles.container}>
        <span className={Styles["footer-menu"]}>
          <SectionCatalog />
        </span>
        <span className={Styles["footer-menu"]}>
          <SectionSupport />
        </span>
        <span className={Styles["footer-menu"]}>
          <SectionService />
        </span>
        <span className={Styles["footer-menu"]}>
          <SectionAbout />
        </span>
        <hr className={Styles.line}></hr>
        <section className={Styles.dilers}>
          <BecomePartnerButton />
          <ForDillersButton />
        </section>
        <span className={Styles.subscribe}>
          <SubscribeButton />
        </span>
        <span className={Styles.phone}>
          <PhoneContacts />
        </span>
        <span className={Styles.email}>
          <EmailContacts />
        </span>
        <span className={Styles.policy}>
          <Policy />
        </span>
        <span className={Styles.bottom}>
          <BottomSection />
        </span>
      </div>
    </footer>
  );
};

export default Footer;
