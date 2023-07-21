import React from "react";
import Styles from "./CategorySection.module.scss";
import UniversalLink from "@components/buttons/UniversalLink";
import { useCategory } from "@hooks/useCategory";
import Loader from "@components/Loader";

const CategorySectionProf = ({ usage }) => {
  const [categories, error] = useCategory({ usage, limit: 7, Styles: Styles });

  const content = categories ? categories : error ? error : <Loader />;

  return (
    <div className={Styles.container}>
      <h3 className={Styles.title}>Тренажеры для дома</h3>
      <ul className={Styles.list}>{content}</ul>
      <UniversalLink text="Все категории" styles={"red-empty"} to={"/catalog/prof"} />
    </div>
  );
};

export default CategorySectionProf;
