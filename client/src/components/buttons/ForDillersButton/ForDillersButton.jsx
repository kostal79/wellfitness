import React from 'react';
import Styles from "./ForDillersButton.module.scss"

const ForDillersButton = () => {
    return (
      <button className={Styles.button} onClick={() => console.log("for dillers clicked")}>
          Для дилеров
      </button>
    );
}

export default ForDillersButton