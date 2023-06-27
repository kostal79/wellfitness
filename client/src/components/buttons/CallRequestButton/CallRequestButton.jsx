import React from 'react';
import Styles from "./CallRequestButton.module.scss"

const CallRequestButton = () => {
    return (
      <button className={Styles.button}>
          Заказать звонок
      </button>
    );
}

export default CallRequestButton