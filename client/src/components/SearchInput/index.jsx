import React, { useState } from "react";
import Styles from "./SearchInput.module.scss";
import SearchIcon from "../Header/HeaderMid/SearchIcon/SearchIcon";

const SearchInput = ({ onSearch }) => {
  //delete below
  onSearch = (searchTerm) => {
    console.log(`Search ${searchTerm}`);
  };

  const [searchTerm, setSearchTerm] = useState();

  const changeHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  const searchHandler = () => {
    onSearch(searchTerm);
  };

  const keyDownHandler = (event) => {
    if (event.key === "Enter") {
      searchHandler();
    }
  };
  return (
    <div className={Styles.container}>
      <div onClick={searchHandler} className={Styles.icon}>
        <SearchIcon />
      </div>
      <input
        className={Styles.input}
        type="text"
        placeholder="Поиск"
        onChange={changeHandler}
        onKeyDown={keyDownHandler}
      />
    </div>
  );
};

export default SearchInput;
