import React from "react";
import Styles from "./BecomePartner.module.scss";
import UniversalButton from "@components/buttons/UniversalButton";
import partnerBanner from "@assets/images/partner-banner.png";

const BecomePartner = () => {
  return (
    <div className={Styles.container}>
      <section className={Styles.info}>
        <p className={Styles.text}>
          Станьте нашим партнером и{" "}
          <span className={Styles["text--red"]}>получите возможность</span>{" "}
          представлять нашу продукцию в вашем регионе.
        </p>
        <UniversalButton text="Стать партнером" styles="white-empty" />
      </section>
      <img className={Styles.image} src={partnerBanner} alt="partner banner" />
    </div>
  );
};

export default BecomePartner;
