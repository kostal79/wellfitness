import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Styles from "../../AsideFilter.module.scss";
import { useParams } from "react-router-dom";
import { usePriceSlider } from "@hooks/usePriceSlider";

const PriceSlider = () => {
  const { typeId } = useParams();
  const { filter, changeHandler, sliderHandler, afterChangeSliderHandler } =
    usePriceSlider(typeId);

  return (
    <div className={Styles.container}>
      <div className={Styles["input-price"]}>
        <input
          className={Styles["input-price--min"]}
          type="number"
          name="minPrice"
          value={filter.minPrice ? filter.minPrice : filter.initialPrice.min !== Infinity ? filter.initialPrice.min : 0}
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
        onAfterChange={afterChangeSliderHandler}
        range
      />
    </div>
  );
};

export default PriceSlider;
