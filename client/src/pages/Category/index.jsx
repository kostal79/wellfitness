import React, { Suspense, useEffect } from "react";
import Styles from "./Categories.module.scss";
import { Await, defer, useLoaderData, useSearchParams } from "react-router-dom";
import { getTypeByID } from "@services/typesAPI";
import { getDevicesWithParams } from "@services/devicesAPI";
import ProductsList from "@components/ProductsList/ProductsList";
import AsideFilter from "@components/AsideFilter/AsideFilter";

const Categories = () => {
  const { typeName, devices } = useLoaderData();

  return (
    <div className={Styles.container}>
      <aside className={Styles.aside}>
        <Suspense>
          <Await resolve={devices}>
            <AsideFilter />
          </Await>
        </Suspense>
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

export default Categories;

export async function categoryLoader({ params, request }) {
  const typeId = params.typeId;
  const url = new URL(request.url);
  const searchParams = new URLSearchParams(url.search);
  const page = searchParams.has("page") && searchParams.get("page") || 1;
  const brand = searchParams.has("brand.brand_id") && searchParams.get("brand.brand_id") || null;
  console.log(brand)
  if (typeId === "all") {
    return defer({
      devices: getDevicesWithParams({ usage: "home", "brand.brand_id": brand }, 20, null, page),
    });
  } else {
    return defer({
      devices: getDevicesWithParams({usage: "home", "type.type_id": typeId, "brand.brand_id": brand }, 20, null, page)
    })
  }
}
