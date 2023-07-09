import React, { memo } from "react";
import Styles from "./ProductSliderContent.module.scss";
import ProductCard from "@components/ProductCard";

const ProductSliderContent = ({parameter, sliderRef, contentRef}) =>  {
  return (
    <div className={Styles.content} ref={contentRef}>
      <div className={Styles.slider} ref={sliderRef}>
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
        />
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
        />
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
        />
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
        />
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
        />
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
        />
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
        />
      </div>
    </div>
  );
};

export default memo(ProductSliderContent) ;
