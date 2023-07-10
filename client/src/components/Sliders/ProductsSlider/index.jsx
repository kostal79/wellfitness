import React, { useState } from "react";
import Styles from "./ProductsSlider.module.scss";
import FilterProduct from "./FilterProduct/FilterProduct";
import UniversalLink from "@components/buttons/UniversalLink";
import ProductSliderContent from "./ProductSliderContent/ProductSliderContent";
import ProductCard from "@components/ProductCard";

const ProductsSlider = () => {
  const [parameter, setParameter] = useState("sign_profit");
  const content = () => {
    const arr = [];
    for(let i = 0; i < 8; i++) {
      arr.push(          
      <ProductCard
        id="1"
        name="Беговая дорожка CardioPower S35"
        imageRef={require("/home/kostal/learnreact/wellfitness/client/src/assets/images/card.png")}
        signProfit={true}
        signNew={true}
        signRecommend={true}
        isInShowroom={true}
        quantity={3}
        rating={3}
        currentPrice={34900}
        oldPrice={34900}
        isInComparison={true}
        isInFavorite={false}
        key={i}
      />)
    }
    return arr;
  }
  return (
    <div className={Styles.container}>
      <div className={Styles.wrapper}>
        <FilterProduct parameter={parameter} setParameter={setParameter} />
        <ProductSliderContent content={content()} />
        <UniversalLink text="Все товары по акции" styles="red-empty" />
      </div>
    </div>
  );
};

export default ProductsSlider;
