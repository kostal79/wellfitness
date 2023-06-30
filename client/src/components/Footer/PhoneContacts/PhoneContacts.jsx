import React from "react";
import Styles from "./PhoneContacts.module.scss";
import CallRequestButton from "../../buttons/CallRequestButton/CallRequestButton";

const PhoneContacts = () => {
  return (
    <section className={Styles.section}>
      <p className={Styles.text}>+7 (000) 000-00-00 для Москвы</p>
      <p className={Styles.text}>8 (800) 000-00-00 для России</p>
      <div className={Styles["call-request"]}><CallRequestButton /></div>
    </section>
  );
};

export default PhoneContacts;
