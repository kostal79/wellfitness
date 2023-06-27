import React from "react";
import Styles from "./BrandList.module.scss";
import { useAsyncValue } from "react-router-dom";

const BrandList = () => {
  const brands = useAsyncValue();
  return (
    <section>
      {brands.map((brand) => <div key={brand._id}>{brand.name}</div>)}
    </section>
  );
};

export default BrandList;
