import React, { useCallback } from "react";
import Styles from "./FilterForm.module.scss";
import { useParams, useSearchParams } from "react-router-dom";
import { useGetBrandNames } from "@hooks/useGetBrandNames";
import BrandFilter from  "./BrandFilter/BrandFilter"
import SpecialOffersFilter from "./SpecialOffersFilter/SpecialOffersFilter";
import PriceSlider from "./PriceSlider/PriceSlider";
import UniversalButton from "@components/buttons/UniversalButton";

const FilterForm = () => {
  const { typeId } = useParams();
  const brands = useGetBrandNames(typeId);
  const [_, setSearchParams] = useSearchParams();

  const resetFilter = useCallback(() => {
   setSearchParams()
  }, []);

  const brandFilter = brands?.map(({ brand_id, brand_name }) => (
    <BrandFilter
      id={brand_id}
      name={brand_name}
      key={brand_id}
    />
  ));


  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <section className={Styles.section}>
        <p>Производители</p>
        <ul>{brandFilter}</ul>
      </section>
      <section className={Styles.section}>
        <p>Акции, наличие</p>
        <ul>{<SpecialOffersFilter />}</ul>
      </section>
      <section className={Styles.section}>
        <PriceSlider/>
      </section>
      <section className={Styles.section}>
        <UniversalButton text="Очистить" click={resetFilter} styles="red-empty"/>
      </section>
    </form>
  );
};

export default FilterForm;
