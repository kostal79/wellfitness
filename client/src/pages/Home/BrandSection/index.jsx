import React from "react";
import Styles from "./BrandSection.module.scss";
import UniversalLink from "@components/buttons/UniversalLink";
import { BRANDS_PAGE } from "../../../constants";
import { useBrandList } from "@hooks/useBrandList";

const BrandSection = () => {
  const { filterList, brandList } = useBrandList(
    [
      "Беговые дорожки",
      "Эллиптические тренажеры",
      "Велотренажеры",
      "Силовые тренажеры",
      "Батуты",
      "Игровые столы",
    ],
    Styles
  );

  const emptyMessage = (
    <p className={Styles["empty-message"]}>Ничего не найдено</p>
  );
  
  return (
    <div className={Styles.container}>
      <h3 className={Styles.title}>Популярные бренды</h3>
      <ul className={Styles.list}>{filterList()}</ul>
      {brandList.length > 0 ? (
        <div className={Styles.grid}>{brandList}</div>
      ) : (
        emptyMessage
      )}
      <div className={Styles.button}>
        <UniversalLink text="Все бренды" styles="red-empty" to={BRANDS_PAGE} />
      </div>
    </div>
  );
};

export default BrandSection;
