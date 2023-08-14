import React, { useEffect, useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Styles from "../../AsideFilter.module.scss";
import { getDevicesWithParams } from "@services/devicesAPI";
import { useParams, useSearchParams } from "react-router-dom";

const PriceSlider = () => {
  const { typeId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const role = "diler"; //TODO: make price type define;
  const [filter, setFilter] = useState({
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
      const searchMinPrice = Number(searchParams.get("minPrice"));
      const searchMaxPrice = Number(searchParams.get("maxPrice"));
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
        minPrice:
          minPrice === Infinity
            ? 0
            : minPrice < searchMinPrice
            ? minPrice
            : searchMinPrice,
        maxPrice: maxPrice > searchMaxPrice ? searchMaxPrice : maxPrice,
        initialPrice: {
          min: minPrice,
          max: maxPrice,
        },
      }));
    }
    fetchPriceBounderies();
  }, [typeId]);

  useEffect(() => {
    const slider = document.querySelector(".rc-slider")
    function setPriceParams() {
      setSearchParams(searchParams)
      slider.removeEventListener("mouseup", setPriceParams)
    }
    slider.addEventListener("mouseup", setPriceParams)
  }, [searchParams])

  function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        console.log("slideHandler");
        return func(...args);
      }, delay);
    };
  }

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFilter((prevFilter) => ({ ...prevFilter, [name]: Number(value) }));
    searchParams.set(name, value);
    setSearchParams(searchParams);
  };

  const sliderHandler = (event) => {
    const [minPrice, maxPrice] = [event[0], event[1]];
    setFilter((prevFilter) => ({ ...prevFilter, minPrice, maxPrice }));
    searchParams.set("minPrice", minPrice);
    searchParams.set("maxPrice", maxPrice);
  };



  return (
    <div className={Styles.container}>
      <div className={Styles["input-price"]}>
        <input
          className={Styles["input-price--min"]}
          type="number"
          name="minPrice"
          value={filter.minPrice || filter.initialPrice.min}
          onChange={changeHandler}
          max={filter.initialPrice.max}
          min={filter.initialPrice.min}
        />
        <input
          className={Styles["input-price--max"]}
          type="number"
          name="maxPrice"
          value={filter.maxPrice || filter.initialPrice.max}
          onChange={changeHandler}
          max={filter.initialPrice.max}
          min={filter.initialPrice.min}
        />
      </div>
      <Slider
        className={Styles.sliders}
        min={filter.initialPrice.min || 0}
        max={filter.initialPrice.max || 0}
        value={[
          filter.minPrice || filter.initialPrice.min,
          filter.maxPrice || filter.initialPrice.max,
        ]}
        onChange={sliderHandler}
        range
      />
    </div>
  );
};

export default PriceSlider;
