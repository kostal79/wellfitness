import React from "react";
import Styles from "./EmailContacts.module.scss";
import WriteLetterButton from "@components/buttons/WriteLetterButton/WriteLetterButton";

const EmailContacts = () => {
  return (
    <section className={Styles.mail}>
      <p>wellfitness@wellfit.ru</p>
      <WriteLetterButton />
    </section>
  );
};

export default EmailContacts;
