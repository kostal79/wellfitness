import React, { useCallback, useEffect, useState } from "react";
import Styles from "./AsideFilter.module.scss";
import { useParams, useSearchParams } from "react-router-dom";
import { useGetBrandNames } from "../../hooks/useGetBrandNames";
import BrandFilter from "./BrandFilter/BrandFilter";
import SpecialOffersFilter from "./SpecialOffersFilter/SpecialOffersFilter";
import PriceSlider from "./PriceSlider/PriceSlider";
import UniversalButton from "@components/buttons/UniversalButton";
import { getDevicesWithParams } from "../../services/devicesAPI";

const AsideFilter = () => {
  const { typeId } = useParams();
  const brands = useGetBrandNames(typeId);
  const [searchParams, setSearchParams] = useSearchParams();
  const role = "diler"; //TODO: make price type define;

  const [filter, setFilter] = useState({
    brand: [],
    profit: false,
    new: false,
    inStock: false,
    recommend: false,
    minPrice: 0,
    maxPrice: 0,
    initialPrice: {
      min: 0,
      max: 0,
    },
  });

  useEffect(() => {
    async function fetchPriceBounderies() {
      const devices = await getDevicesWithParams({ "type.type_id": typeId });
      let maxPrice = 0;
      let minPrice = Infinity;

      devices.forEach((device) => {
        const price =
          role === "diler"
            ? device.special_price.diler
            : device.special_price.retail;
        if (price > maxPrice) maxPrice = price;
        if (price < minPrice) minPrice = price;
      });

      setFilter((prevFilter) => ({
        ...prevFilter,
        minPrice: minPrice === Infinity ? 0 : minPrice,
        maxPrice: maxPrice,
        initialPrice: {
          min: minPrice,
          max: maxPrice,
        },
      }));
    }
    fetchPriceBounderies();
  }, [typeId]);

  const resetFilter = useCallback(() => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      brand: [],
      profit: false,
      new: false,
      inStock: false,
      recommend: false,
      minPrice: filter.initialPrice.min,
      maxPrice: filter.initialPrice.max,
    }));
  });

  const submitFilter = useCallback(() => {
    setSearchParams(filter);
  });

  useEffect(() => {
    resetFilter();
  }, [typeId]);

  const brandFilter = brands?.map(({ brand_id, brand_name }) => (
    <BrandFilter
      id={brand_id}
      name={brand_name}
      setFilter={setFilter}
      filter={filter}
      key={brand_id}
    />
  ));

  const specialOffersFilter = (
    <SpecialOffersFilter filter={filter} setFilter={setFilter} />
  );

  return (
    <div className={Styles.container}>
      <form onSubmit={(event) => event.preventDefault()}>
        <section className={Styles.section}>
          <p>Производители</p>
          <ul>{brandFilter}</ul>
        </section>
        <section className={Styles.section}>
          <p>Акции, наличие</p>
          <ul>{specialOffersFilter}</ul>
        </section>
        <section className={Styles.section}>
          <PriceSlider
            minPrice={filter.minPrice}
            maxPrice={filter.maxPrice}
            setFilter={setFilter}
            initialPrice={filter.initialPrice}
          />
        </section>
        <section className={Styles.section}>
          <UniversalButton text="Применить" click={submitFilter} />
          <UniversalButton text="Очистить" click={resetFilter} />
        </section>
      </form>
    </div>
  );
};

export default AsideFilter;
