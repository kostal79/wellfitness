import React, { Suspense, lazy } from "react";
import Styles from "./Brands.module.scss";
import { Await, defer, useAsyncValue, useLoaderData } from "react-router-dom";
import { getAllBrands, getBrandsWithParams } from "../../services/brandsAPI";
import Loader from "@components/Loader";
const BrandList = lazy(() => import("../../components/BrandList/BrandList"))

const Brands = () => {
  const { brands } = useLoaderData();
  return (
    <>
      <div>Brand page</div>
      <Suspense fallback={<Loader />}>
        <Await resolve={brands} errorElement={<div>Error!!!</div>}>
          <BrandList />
        </Await>
      </Suspense>
    </>
  );
};

export default Brands;

export const brandsLoader = async () => defer({brands: getBrandsWithParams()})