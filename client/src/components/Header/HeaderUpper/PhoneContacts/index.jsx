import React, { useState } from "react";
import Styles from "./PhoneContacts.module.scss";
import CallRequestButton from "@components/buttons/CallRequestButton/CallRequestButton";

const PhoneContacts = () => {
  const [city, setCity] = useState("МСК");

  const clickHandler = (event) => {
    setCity(event.target.value);
  };

  const getContact = (city) => {
    if (city === "МСК") {
      return (
        <a className={Styles.tel} href="tel:+70000000000">
          +7 (000) 000-00-00
        </a>
      );
    } else {
      return (
        <a className={Styles.tel} href="tel:88000000000">
          8 (800) 000-00-00
        </a>
      );
    }
  };

  return (
    <div className={Styles.container}>
      <div>
        {getContact(city)}
        <select
          name="city"
          className={Styles.select}
          onChange={(event) => clickHandler(event)}
        >
          <option value="МСК" className={Styles.option}>
            МСК
          </option>
          <option value="Регионы" className={Styles.option}>
            Регионы
          </option>
        </select>
      </div>
      <CallRequestButton />
    </div>
  );
};

export default PhoneContacts;
