import React from 'react';
import Styles from "./HomePage.module.scss"
import { Link } from 'react-router-dom';

const HomePage = ({navigateWithQueryParams}) => {
  const handleButtonClick = () => {
    const queryParams = {
      param1: "value1",
      param2: "value2",
    };
    navigateWithQueryParams("/home", queryParams);
  };
    return (
      <div>
          <button onClick={handleButtonClick}>Navigate whith query params</button>
      </div>
    );
}

export default HomePage