import React, { useEffect, useState } from "react";
import Styles from "./BrandSection.module.scss";
import {NavLink} from "react-router-dom"
import UniversalLink from "@components/buttons/UniversalLink"
import { getAllBrands } from "@services/brandsAPI";
import {  SERVER_URL } from "../../../constants";

const BrandSection = () => {
  const [filter, setFilter] = useState("Беговые дорожки");
  const [brandList, setBrandList] = useState();

  useEffect(() => {
    async function getBrandList() {
      const brandList = await getAllBrands();
        const list = [];
        for (let brand of brandList) {
          list.push(
            <NavLink to={`/brands/${brand._id}`} key={brand._id}>
              <div className={Styles["grid-cell"]} >
                <img src={`${SERVER_URL}/brands/${brand.logo_ref}`} alt={brand.name} />
              </div>
            </NavLink>
          );
        }
        setBrandList(list);
    }
    getBrandList()
  }, [])

  const filterHandler = (value) => {
    setFilter(value);
  };

  const classNameItem = (value) => {
    const classNames = [Styles["list_item"]];
    if (value === filter) {
      classNames.push(Styles["list_item--active"]);
    }
    return classNames.join(" ");
  };

  const filterList = (list) => {
    return list.map((item) => {
      return (
        <li
          className={classNameItem(item)}
          onClick={() => filterHandler(item)}
          key={item}
        >
          {item}
        </li>
      );
    });
  };




  return (
    <div className={Styles.container}>
      <h3 className={Styles.title}>Популярные бренды</h3>
      <ul className={Styles.list}>
        {filterList([
          "Беговые дорожки",
          "Эллиптические тренажеры",
          "Велотренажеры",
          "Силовые тренажеры",
          "Батуты",
          "Игровые столы"
        ])}
      </ul>
      <div className={Styles.grid}>{brandList}</div>
      <div className={Styles.button} >
        <UniversalLink text="Все бренды" styles="red-empty" />
      </div>
    </div>
  );
};

export default BrandSection;
