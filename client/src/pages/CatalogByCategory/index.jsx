import React, { Suspense } from "react";
import { Await, defer, useLoaderData, useParams } from "react-router-dom";
import { getDevicesWithParams } from "@services/devicesAPI";
import { getTypesWithParams } from "@services/typesAPI";
import Styles from "./CatalogByCategory.module.scss";
import ProductsList from "@components/ProductsList";
import AsideFilter from "@components/AsideFilter";

const CatalogByCategories = () => {
  const { devices, typesIds } = useLoaderData();

  return (
    <div className={Styles.container}>
      <aside className={Styles.aside}>
        <Suspense>
          <Await resolve={typesIds}>
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

export default CatalogByCategories;

export async function categoryLoader({ params, request }) {
  const typeId = params.typeId;
  const url = new URL(request.url);
  const searchParams = new URLSearchParams(url.search);
  const page = searchParams.get("page") || 1;
  const brand = searchParams.get("brand.brand_id") || null;

  return defer({
    devices: getDevicesWithParams(
      {
        usage: "home",
        "type.type_id": { $in: typeId },
        "brand.brand_id": { $in: brand },
      },
      20,
      null,
      page
    ),
    typesIds: [typeId],
  });
}

export async function allCategoriesLoader({ params, request }) {
  const groupId = params.groupId;
  const url = new URL(request.url);
  const searchParams = new URLSearchParams(url.search);
  const page = searchParams.get("page") || 1;
  const brand = searchParams.get("brand.brand_id") || null;
  return defer({
    devices: getDevicesWithParams({
      usage: "home",
      "group.group_id": groupId,
      "brand.brand_id": { $in: brand },
    },
    20,
    null,
    page
    ),
    typesIds: getTypesIdsByGroup(groupId),
  });
}

async function getTypesIdsByGroup(groupId) {
  const types = await getTypesWithParams({ group: groupId });
  const typesIds = types.map((type) => type._id);
  return typesIds;
}
