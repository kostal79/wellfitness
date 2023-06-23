import React from 'react';
import Styles from "./HomePage.module.scss"
import { useNavigate, useSearchParams } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    for (let [key, value] of searchParams.entries()) {
      console.log("key === > ", key)
      console.log("value === > ", value)

    }

  const navigateWithQueryParams = (path, queryParams) => {
    navigate({
      pathname: path,
      search: new URLSearchParams(queryParams).toString(),
    });
  };
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