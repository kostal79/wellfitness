import React from "react";
import Styles from "../../AsideFilter.module.scss";
import { useSearchParams } from "react-router-dom";

const BrandFilter = ({ name, id }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const changeHandler = (event) => {
    if (event.target.checked) {
      searchParams.append("brand", id);
      setSearchParams(searchParams);
    } else {
      const brands = searchParams.getAll("brand");
      const filteredBrands = brands.filter((brand_id) => brand_id !== id);
      if (filteredBrands.length < 1) {
        searchParams.delete("brand");
        setSearchParams(searchParams);
      } else {
        searchParams.set("brand", filteredBrands);
        setSearchParams(searchParams);
      }
    }
  };
  return (
    <li className={Styles["list-item"]}>
      <label className={Styles.label} htmlFor={name}>
        <input
          className={Styles.input}
          type="checkbox"
          name={name}
          value={id}
          checked={searchParams.getAll("brand").includes(id)}
          onChange={changeHandler}
        />
        {name}
      </label>
    </li>
  );
};

export default BrandFilter;
