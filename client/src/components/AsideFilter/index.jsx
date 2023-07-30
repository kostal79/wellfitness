import React, { createRef, useEffect, useRef, useState } from "react";
import Styles from "./AsideFilter.module.scss";
import {
  useActionData,
  useAsyncValue,
  useLocation,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { getBrandNamesByTypes } from "@services/devicesAPI";

let renders = createRef(1);
const AsideFilter = () => {
  const typesIds = useAsyncValue();
  const [brandsList, setBrandsList] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const selectBrandHandler = (event) => {
    if (event.target.checked) {
      setSearchParams(prev => {return {...prev, "brand.brand_id" : event.target.value}});
    }
  };

  useEffect(() => {
    (async function () {
      const brandsArr = await getBrandNamesByTypes(typesIds);
      const brands = brandsArr.map((brand) => (
        <div className={Styles.checkbox} key={brand.id}>
          <input
            className={Styles.input}
            type="checkbox"
            value={brand.id}
            name={brand.name}
            onChange={(event) => {
              selectBrandHandler(event);
            }}
          />
          <label className={Styles.label} htmlFor={brand.name}>
            {brand.name}
          </label>
        </div>
      ));
      setBrandsList(brands);
    })();
  }, [typesIds]);

  return (
    <div className={Styles.container}>
      <section className={Styles.section}>
        <p>Производители</p>
        {brandsList}
      </section>
    </div>
  );
};

export default AsideFilter;
