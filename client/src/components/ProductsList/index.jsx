import React from 'react';
import Styles from "./ProductsList.module.scss"
import { useAsyncValue } from 'react-router-dom';
import { STATIC_DEVICES } from "../../constants";
import { quantityEvaluate } from "@utils/quantityEvaluate";
import ProductCard from "@components/ProductCard";

const ProductsList = () => {
  const devices = useAsyncValue()

  const role = "diler"; //TODO: make fetching role from redux
  const inComparison = ["64ae75aa3d0f5b9b89e4ba14"]; //TODO: make fetching comparison from local storage
  const inFavorite = ["64ae75aa3d0f5b9b89e4ba14"]; //TODO: make fetching favorites from local storage

  const devicesList = devices.map((device) => (
    <ProductCard
      key={device._id}
      id={device._id}
      name={device.full_name}
      imageRef={`${STATIC_DEVICES}/${device.images_refs[0]}`}
      signProfit={device.sign_profit}
      signRecommend={device.sign_recommend}
      signNew={device.sign_new}
      isInShowroom={device.is_in_showroom}
      quantity={quantityEvaluate(device.quantity)}
      rating={device.rating_average}
      currentPrice={
        role === "diler"
          ? device.special_price.diler
          : device.special_price.retail
      }
      oldPrice={
        role === "diler" ? device.price.diler : device.price.retail
      }
      isInComparison={inComparison.includes(device._id)}
      isInFavorite={inFavorite.includes(device._id)}
    />
  ))

    return (
      <div className={Styles.container}>
          {devicesList}
      </div>
    );
}

export default ProductsList