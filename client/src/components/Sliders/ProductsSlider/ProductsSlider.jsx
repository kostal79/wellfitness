import React, { useState } from "react";
import Styles from "./ProductsSlider.module.scss";
import ProductCard from "../../ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { ReactComponent as RightArrowSVG } from "@assets/svg/right-arrow.svg";
import { ReactComponent as LeftArrowSVG } from "@assets/svg/left-arrow.svg";

const ProductsSlider = () => {
  const [parametr, setParametr] = useState("sign_profit");

  const giveClassName = (param) => {
    if (param === parametr) {
      return Styles["filter--active"]
    } else {
      return Styles.filter
    }
  }
  return (
    <div className={Styles.container}>
      <div className={Styles.wrapper}>
        <div className={Styles.filters}>
          <p3 className={giveClassName("sign_profit")}>Акция</p3>
          <p3 className={giveClassName("sign_new")}>Новинки</p3>
          <p3 className={giveClassName("sign_recomend")}>Мы рекомендуем</p3>
        </div>
        <div className={Styles.content}>
          <div className={Styles.slider}>
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
      </div>
    </div>
  );
};

export default ProductsSlider;
