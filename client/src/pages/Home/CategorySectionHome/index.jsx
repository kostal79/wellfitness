import React from "react";
import Styles from "./CategorySection.module.scss";
import UniversalButton from "@components/buttons/UniversalButton";
import { useCategory } from "../../../hooks/useCategory";
import Loader from "@components/Loader"

const CategorySectionHome = ({ usage }) => {

  const [categories, error] = useCategory({usage, limit: 10, Styles: Styles});

  const content = categories ? categories : error ? error : <Loader />

  return (
    <div className={Styles.container}>
      <h3 className={Styles.title}>Тренажеры для дома</h3>
      <ul className={Styles.list}>{content}</ul>
      <UniversalButton text="Все категории" styles={"red-empty"} />
    </div>
  );
};

export default CategorySectionHome;
