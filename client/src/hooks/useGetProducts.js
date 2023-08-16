import { useEffect, useState } from "react";
import { getDevicesWithParams } from "@services/devicesAPI";
import { STATIC_DEVICES } from "../constants";
import ProductCard from "@components/ProductCard";
import { quantityEvaluate } from "../utils/quantityEvaluate";

export const useGetProducts = () => {
    const [parameter, setParameter] = useState("sign_profit");
    const [content, setContent] = useState([])
    const role = "diler"; //TODO: make fetching role from redux
    const inComparison = ["64ae75aa3d0f5b9b89e4ba14"]; //TODO: make fetching comparison from local storage
    const inFavorite = ["64ae75aa3d0f5b9b89e4ba14"]; //TODO: make fetching favorites from local storage

    useEffect(() => {
        async function getProductList() {
            const result = await getDevicesWithParams({ [`${parameter}`]: true, limit: 10 });
            const cards =
                result.collection.length > 0 ? (
                    result.collection.map((device) => (
                        <ProductCard
                            id={device._id}
                            name={device.full_name}
                            imageRef={`${STATIC_DEVICES}/${device.images_refs[0]}`}
                            signProfit={device.sign_profit}
                            signNew={device.sign_new}
                            signRecommend={device.sign_recommend}
                            isInShowroom={device.is_in_showroom}
                            quantity={quantityEvaluate(device.quantity)}
                            rating={device.rating_average}
                            currentPrice={
                                role === "diler"
                                    ? device.special_price.diler
                                    : device.special_price.retail
                            }
                            oldPrice={role === "diler" ? device.price.diler : device.price.retail}
                            isInComparison={inComparison.includes(device._id)}
                            isInFavorite={inFavorite.includes(device._id)}
                            key={device._id}
                        />
                    ))
                ) : (
                    <p>"Ничего не найдено"</p>
                );
            setContent(cards)
        }
        getProductList()
    }, [parameter])

    return { parameter, setParameter, content }
}