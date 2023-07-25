import React from "react";
import { defer, useLoaderData } from "react-router-dom";
import { getDevicesWithParams } from "@services/devicesAPI";
import ProductSection from "@components/ProductSection";

const Categories = () => {
  const { devices, typesIds } = useLoaderData();

  return <ProductSection devices={devices} typesIds={typesIds} />;
};

export default Categories;

export async function categoryLoader({ params, request }) {
  const typeId = params.typeId;
  const url = new URL(request.url);
  const searchParams = new URLSearchParams(url.search);
  const page = searchParams.get("page") || 1;
  const brand = searchParams.get("brand.brand_id") || null;

  return defer({
    devices: getDevicesWithParams(
      { usage: "home", "type.type_id": {$in: typeId}, "brand.brand_id": {$in: brand} },
      20,
      null,
      page
    ),
    typesIds: [typeId],
  });
}
