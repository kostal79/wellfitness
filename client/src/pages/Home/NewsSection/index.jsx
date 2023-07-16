import React from "react";
import Styles from "./NewsSection.module.scss";
import UniversalLink from "@components/buttons/UniversalLink";
import ProductSliderContent from "../../../components/Sliders/ProductsSlider/ProductSliderContent/ProductSliderContent";
import { useGetNews } from "@hooks/useGetNews";

const NewsSection = () => {
  const { classNameHandler, clickHandler, news } = useGetNews(Styles);

  return (
    <div className={Styles.container}>
      <div className={Styles.bookmarks}>
        <p className={classNameHandler("news")} onClick={clickHandler("news")}>
          Новости
        </p>
        <p
          className={classNameHandler("blogs")}
          onClick={clickHandler("blogs")}
        >
          Блог
        </p>
      </div>
      <ProductSliderContent content={news} />
      <UniversalLink text="Все новости" styles="red-empty" />
    </div>
  );
};

export default NewsSection;
