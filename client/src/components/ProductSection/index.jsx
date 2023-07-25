import React, { Suspense } from "react";
import Styles from "./ProductSection.module.scss";
import ProductsList from "@components/ProductsList";
import AsideFilter from "@components/AsideFilter";
import { Await, useLocation } from "react-router-dom";

const ProductSection = ({ devices, typesIds }) => {
  const location = useLocation();

  return (
    <div className={Styles.container}>
      <aside className={Styles.aside}>
        <AsideFilter typeId={typesIds}/>
      </aside>
      <div className={Styles["search-results"]}>
        <div className={Styles["sort-block"]}></div>
        <div className={Styles["devices-grid"]}>
          <Suspense>
            <Await resolve={devices}>
              <ProductsList />
            </Await>
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
