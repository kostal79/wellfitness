import React from 'react';
import Styles from "./ResetButton.module.scss"

const ResetButton = () => {
    return (
      <UniversalButton text="Очистить" click={resetFilter} />
    );
}

export default ResetButton