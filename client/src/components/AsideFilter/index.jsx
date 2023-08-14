import React, { useState } from "react";
import Styles from "./AsideFilter.module.scss";
import FilterForm from "./FilterForm/FilterForm";

const AsideFilter = () => {
  return (
    <div className={Styles.container}>
      <FilterForm />
    </div>
  );
};

export default AsideFilter;
