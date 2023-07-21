import React, { useState } from "react";
import Styles from "./AsideFilter.module.scss";
import { useAsyncValue, useSearchParams } from "react-router-dom";

const AsideFilter = () => {
  const devices = useAsyncValue();
  const [searcParams, setSearchParams] = useSearchParams()
  const brandsMap = new Map([]);
  console.log(devices);
  devices.forEach((device) => {
    brandsMap.set(device.brand.brand_name, device.brand.brand_id);
  });

  const selectBrandHandler = (event) => {
    console.log(event.target.value)

  }

  const brands = [];
  brandsMap.forEach((id, name) =>
    brands.push(
      <div className={Styles.checkbox} key={id}>
        <input
          className={Styles.input}
          type="checkbox"
          value={id}
          name={name}
          onChange={(event) => {selectBrandHandler(event)}}
        />
        <label className={Styles.label} htmlFor={name}>
          {name}
        </label>
      </div>
    )
  );

  return (
    <div className={Styles.container}>
      <section className={Styles.section}>
        <p>Производители</p>
        {brands}
      </section>
    </div>
  );
};

export default AsideFilter;
