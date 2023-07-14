import React from "react";
import Styles from "./NewsSection.module.scss";
import UniversalLink from "@components/buttons/UniversalLink";
import ProductSliderContent from "../../../components/Sliders/ProductsSlider/ProductSliderContent/ProductSliderContent";
import {useGetNews} from "@hooks/useGetNews";

const NewsSection = () => {
  // const [bookmark, setBookmark] = useState("news");

  // const clickHandler = (value) => {
  //   return function () {
  //     setBookmark(value);
  //   };
  // };

  // const classNameHandler = (value) => {
  //   const classNames = [Styles["bookmark"]];
  //   if (value === bookmark) {
  //     classNames.push(Styles["bookmark--active"]);
  //   }
  //   return classNames.join(" ");
  // };

  // const imageRef = "http://localhost:5000/blogs/news.png";
  // const header = "В продажу поступили тренажеры Nautilus";
  // const promotext = "Представляем тренажеры Nautilus 626 серии.";
  // const date = dateFormat(new Date(), "yyyy.mm.dd");
  // const content = () => {
  //   const arr = [];
  //   for (let i = 0; i < 8; i++) {
  //     arr.push(
  //       <NewsCard
  //         imageRef={imageRef}
  //         header={header}
  //         promotext={promotext}
  //         date={date}
  //         id={1}
  //         key={i}
  //       />
  //     );
  //   }
  //   return arr;
  // };

  const {classNameHandler, clickHandler, news} = useGetNews(Styles);

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
