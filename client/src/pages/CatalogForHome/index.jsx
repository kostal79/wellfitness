import React  from "react";
import Styles from "./CatalogForHome.module.scss";
import GroupCard from "@components/GroupCard";

const CatalogForHome = () => {

  return (
    <div className="limited-wrapper">
      <div className={Styles.container}>
        <h1 className={Styles.title}>Тренажеры для дома</h1>
        <div className={Styles.grid}>
          <GroupCard imageRef="cardio.png" group="Кардиотренажеры" usage="home" />
          <GroupCard imageRef="strength.png" group="Силовые тренажеры" usage="home"/>
          <GroupCard imageRef="trampoline-2.png" group="Уличные виды спорта" usage="home"/>
          <GroupCard imageRef="dumbbells.png" group="Свободные веса" usage="home"/>
          <GroupCard imageRef="tables-group.png" group="Игровые столы" usage="home"/>
          <GroupCard imageRef="massage.png" group="Массажное оборудование" usage="home"/>
          <GroupCard imageRef="accessories-green.png" group="Фитнес аксессуары" usage="home"/>
          <GroupCard imageRef="functional-traning.png" group="Функциональный тренинг" usage="home"/>
        </div>
      </div>
    </div>
  );
};

export default CatalogForHome;
