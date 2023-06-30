import React from 'react';
import Styles from "./ForDillers.module.scss"
import ForDillersButton from "@components/buttons/ForDillersButton/ForDillersButton"
import BecomePartnerButton from "@components/buttons/BecomePartnerButton/BecomePartnerButton"

const ForDillers = () => {
    return (
      <div className={Styles.container}>
          <ForDillersButton />
          <BecomePartnerButton />
      </div>
    );
}

export default ForDillers