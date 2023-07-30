import React from "react";
import Styles from "./CatalogByUsage.module.scss";
import GroupCard from "@components/GroupCard";
import CompilationsSection from "@components/CompilationsSection";
import ProductsSlider from "@components/Sliders/ProductsSlider";
import { useParams } from "react-router-dom";

const CatalogByUsage = () => {
  const {usage} = useParams();
  
    return (
      <div className="wrapper">
        <div className="limited-wrapper">
          <div className={Styles.container}>
            <h1 className={Styles.title}>Тренажеры для дома</h1>
            {usage === "home" && <div className={Styles.grid}>
              <GroupCard
                imageRef="cardio.png"
                groupName="Кардиотренажеры"
                usage="home"
              />
              <GroupCard
                imageRef="strength.png"
                groupName="Силовые тренажеры"
                usage="home"
              />
              <GroupCard
                imageRef="trampoline-2.png"
                groupName="Уличные виды спорта"
                usage="home"
              />
              <GroupCard
                imageRef="dumbbells.png"
                groupName="Свободные веса"
                usage="home"
              />
              <GroupCard
                imageRef="tables-group.png"
                groupName="Игровые столы"
                usage="home"
              />
              <GroupCard
                imageRef="massage.png"
                groupName="Массажное оборудование"
                usage="home"
              />
              <GroupCard
                imageRef="accessories-green.png"
                groupName="Фитнес аксессуары"
                usage="home"
              />
              <GroupCard
                imageRef="functional-traning.png"
                groupName="Функциональный тренинг"
                usage="home"
              />
            </div>}
          </div>
        </div>
        <CompilationsSection />
        <div className="limited-wrapper">
          <ProductsSlider />
        </div>
      </div>
    );
};

export default CatalogByUsage;
