import React from 'react';
import Styles from "./SearchIcon.module.scss"
import {ReactComponent as SearchSVG} from "@assets/svg/search.svg"

const SearchIcon = () => {
  const onClickHandler = () => {
    console.log("Search clicked")
  }
    return (
      <div className={Styles.container} onClick={onClickHandler}>
          <SearchSVG />
      </div>
    );
}

export default SearchIcon