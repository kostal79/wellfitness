import React, { Suspense } from "react";
import { Await, defer, useLoaderData, useParams } from "react-router-dom";
import { getDevicesWithParams } from "@services/devicesAPI";
import { getTypesWithParams } from "@services/typesAPI";
import Styles from "./CatalogByCategory.module.scss";
import ProductsList from "@components/ProductsList";
import AsideFilter from "@components/AsideFilter";

const CatalogByCategories = () => {
  const { devices } = useLoaderData();

  return (
    <div className={Styles.container}>
      <aside className={Styles.aside}>
        <AsideFilter />
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
  const role = "diler"; //TODO
  const { usage, typeId } = params;
  const url = new URL(request.url);
  const searchParams = new URLSearchParams(url.search);
  const page = searchParams.get("page") || 1;
  const brand =
    searchParams.getAll("brand").length > 0
      ? searchParams.getAll("brand")
      : null;
  const profit = searchParams.get("profit") === "true" ? true : null;
  const isNew = searchParams.get("new") === "true" ? true : null;
  const quantity =
    searchParams.get("inStock") === "true" ? { $gte: 1 } : { $gte: 0 };
  const recommend = searchParams.get("recommend") === "true" ? true : null;
  const minPrice =
    Number(searchParams.get("minPrice")) > 0
      ? Number(searchParams.get("minPrice"))
      : -Infinity;
  const maxPrice =
    Number(searchParams.get("maxPrice")) > 0
      ? Number(searchParams.get("maxPrice"))
      : Infinity;
  const priceSpanDiler =
    role === "diler" ? { $gte: minPrice, $lte: maxPrice } : null;
  const priceSpanRetail =
    role === "retail" ? { $gte: minPrice, $lte: maxPrice } : null;

  return defer({
    devices: getDevicesWithParams(
      {
        usage,
        "type.type_id": { $in: typeId },
        "brand.brand_id": { $in: brand },
        sign_profit: profit,
        sign_new: isNew,
        sign_recommend: recommend,
        quantity: quantity,
        "special_price.diler": 22410,
        "special_price.retail": priceSpanRetail,
      },
      20,
      null,
      page
    ),
  });
}

export async function allCategoriesLoader({ params, request }) {
  const { usage, groupId } = params;
  const url = new URL(request.url);
  const searchParams = new URLSearchParams(url.search);
  const page = searchParams.get("page") || 1;
  const brand = searchParams.getAll("brand.brand_id") || null;

  return defer({
    devices: getDevicesWithParams(
      {
        usage,
        "group.group_id": groupId,
        "brand.brand_id": { $in: brand },
      },
      20,
      null,
      page
    ),
  });
}

async function getTypesIdsByGroup(groupId) {
  const types = await getTypesWithParams({ group: groupId });
  const typesIds = types.map((type) => type._id);
  return typesIds;
}
