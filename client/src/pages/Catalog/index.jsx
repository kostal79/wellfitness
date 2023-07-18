import React, { useEffect, useState } from "react";
import Styles from "./Catalog.module.scss";
import CompilationsSection from "@components/CompilationsSection";
import ProductsSlider from "@components/Sliders/ProductsSlider";
import CategorySectionHome from "@pages/Home/CategorySectionHome";
import CategorySectionProf from "@pages/Home/CategorySectionProf";
import { Outlet, useLocation } from "react-router-dom";

const Catalog = () => {
  const location = useLocation();
  const isMain = location.pathname === "/catalog";
  if (isMain) {
    return (
      <div className="wrapper">
        <div className="limited-wrapper">
          <div className={Styles.categories}>
            <CategorySectionHome />
            <CategorySectionProf />
          </div>
        </div>
        <CompilationsSection />
        <div className="limited-wrapper">
          <ProductsSlider />
        </div>
      </div>
    );
  } else {
    return <Outlet />;
  }
};

export default Catalog;
