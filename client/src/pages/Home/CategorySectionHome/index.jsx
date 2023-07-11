import React from "react";
import Styles from "./CategorySection.module.scss";
import UniversalLink from "@components/buttons/UniversalLink";
import { useCategory } from "@hooks/useCategory";
import Loader from "@components/Loader";
import { CATEGORIES_PAGE } from "../../../constants";
import makeQueryParams from "../../../utils/makeQueryParams";

const CategorySectionHome = ({ usage }) => {
  const [categories, error] = useCategory({ usage, limit: 10, Styles: Styles });

  const content = categories ? categories : error ? error : <Loader />;
  const to = `${CATEGORIES_PAGE}?${makeQueryParams({ usage: usage })}`;

  return (
    <div className={Styles.container}>
      <h3 className={Styles.title}>Тренажеры для дома</h3>
      <ul className={Styles.list}>{content}</ul>
      <UniversalLink text="Все категории" styles={"red-empty"} to={to} />
    </div>
  );
};

export default CategorySectionHome;
