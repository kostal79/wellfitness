import React from "react";
import Styles from "./ProductsSlider.module.scss";
import FilterProduct from "./FilterProduct/FilterProduct";
import UniversalLink from "@components/buttons/UniversalLink";
import ProductSliderContent from "./ProductSliderContent/ProductSliderContent";
import { useGetProducts } from "../../../hooks/useGetProducts";

const ProductsSlider = () => {
  const { parameter, setParameter, content } = useGetProducts();

  return (
    <div className={Styles.container}>
      <div className={Styles.wrapper}>
        <FilterProduct parameter={parameter} setParameter={setParameter} />
        <ProductSliderContent content={content} />
        <UniversalLink text="Все товары по акции" styles="red-empty" />
      </div>
    </div>
  );
};

export default ProductsSlider;
