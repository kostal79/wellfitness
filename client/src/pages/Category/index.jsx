import React, { Suspense } from "react";
import Styles from "./Categories.module.scss";
import { Await, defer, useLoaderData, useSearchParams } from "react-router-dom";
import { getTypeByID } from "@services/typesAPI";
import { getDevicesWithParams } from "@services/devicesAPI";
import ProductsList from "@components/ProductsList/ProductsList";
import AsideFilter from "@components/AsideFilter/AsideFilter";

const Categories = () => {
  const { typeName, devices } = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();

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
  const type = getTypeByID(typeId);
  const typeName = type.name;
  const usage = type.usage;
  return defer({
    name: typeName,
    devices: await getDevicesWithParams({ usage, "type.type_id": typeId }),
  });
}
