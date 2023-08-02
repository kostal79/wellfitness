import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Styles from "../AsideFilter.module.scss";


const PriceSlider = ({ minPrice, maxPrice, setFilter, initialPrice }) => {
  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFilter((prevFilter) => ({ ...prevFilter, [name]: Number(value) }));
  };

  const sliderHandler = (event) => {
    const [minPrice, maxPrice] = [event[0], event[1]];
    setFilter((prevFilter) => ({ ...prevFilter, minPrice, maxPrice }));
  };

  return (
    <div className={Styles.container}>
      <div className={Styles["input-price"]}>
        <input
          className={Styles["input-price--min"]}
          type="number"
          name="minPrice"
          value={minPrice}
          onChange={changeHandler}
          max={initialPrice?.max}
          min={initialPrice?.min}
        />
        <input
          className={Styles["input-price--max"]}
          type="number"
          name="maxPrice"
          value={maxPrice}
          onChange={changeHandler}
          max={initialPrice?.max}
          min={initialPrice?.min}
        />
      </div>
      <Slider
        className={Styles.sliders}
        min={initialPrice?.min || 0}
        max={initialPrice?.max || 0}
        value={[minPrice || initialPrice?.min, maxPrice ||initialPrice?.max]}
        onChange={sliderHandler}
        range
      />
    </div>
  );
};

export default PriceSlider;
