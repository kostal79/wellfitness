import React, { Suspense, useState } from "react";
import {
  Await,
  defer,
  useLoaderData,
} from "react-router-dom";
import { getDevicesWithParams } from "@services/devicesAPI";
import { getTypesWithParams } from "@services/typesAPI";
import Styles from "./CatalogByCategory.module.scss";
import ProductsList from "@components/ProductsList";
import AsideFilter from "@components/AsideFilter";
import { CARDS_PER_PAGE } from "../../constants";


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
  const quantity = searchParams.get("inStock") === "true" ? true : null;
  const recommend = searchParams.get("recommend") === "true" ? true : null;
  const sort = searchParams.get("sort") !== "null" ? searchParams.get("sort") : null;
  const ascending = searchParams.get("ascending") === "true" ? 1 : -1;
  const limit = searchParams.get("limit") ? searchParams.get("limit") : CARDS_PER_PAGE;
  let minPriceDiler;
  let maxPriceDiler;
  let minPriceRetail;
  let maxPriceRetail;

  if (role === "diler") {
    minPriceDiler = searchParams.get("minPrice");
    maxPriceDiler = searchParams.get("maxPrice");
  } else if (role === "retail") {
    minPriceRetail = searchParams.get("minPrice");
    maxPriceRetail = searchParams.get("maxPrice");
  }

  return defer({
    devices: getDevicesWithParams({
      usage,
      "type.type_id": { $in: typeId },
      "brand.brand_id": { $in: brand },
      sign_profit: profit,
      sign_new: isNew,
      sign_recommend: recommend,
      quantity: quantity,
      minPriceDiler,
      maxPriceDiler,
      minPriceRetail,
      maxPriceRetail,
      page,
      limit,
      select: null,
      sort: sort,
      ascending: ascending,
    }),
  });
}

export async function allCategoriesLoader({ params, request }) {
  const { usage, groupId } = params;
  const role = "diler"; //TODO
  const url = new URL(request.url);
  const searchParams = new URLSearchParams(url.search);
  const page = searchParams.get("page") || 1;
  const brand =
    searchParams.getAll("brand").length > 0
      ? searchParams.getAll("brand")
      : null;
  const profit = searchParams.get("profit") === "true" ? true : null;
  const isNew = searchParams.get("new") === "true" ? true : null;
  const quantity = searchParams.get("inStock") === "true" ? true : null;
  const recommend = searchParams.get("recommend") === "true" ? true : null;
  const sort = searchParams.get("sort");
  const ascending = searchParams.get("ascending") === "true" ? 1 : -1;
  const limit = searchParams.get("limit") ? searchParams.get("limit") : CARDS_PER_PAGE;
  let minPriceDiler;
  let maxPriceDiler;
  let minPriceRetail;
  let maxPriceRetail;

  if (role === "diler") {
    minPriceDiler = searchParams.get("minPrice");
    maxPriceDiler = searchParams.get("maxPrice");
  } else if (role === "retail") {
    minPriceRetail = searchParams.get("minPrice");
    maxPriceRetail = searchParams.get("maxPrice");
  }

  return defer({
    devices: getDevicesWithParams({
      usage,
      "brand.brand_id": { $in: brand },
      sign_profit: profit,
      sign_new: isNew,
      sign_recommend: recommend,
      quantity: quantity,
      minPriceDiler,
      maxPriceDiler,
      minPriceRetail,
      maxPriceRetail,
      page,
      limit,
      select: null,
      sort: sort,
      ascending: ascending,
    }),
  });
}

async function getTypesIdsByGroup(groupId) {
  const types = await getTypesWithParams({ group: groupId });
  const typesIds = types.map((type) => type._id);
  return typesIds;
}
