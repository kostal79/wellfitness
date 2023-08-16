import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getDevicesWithParams } from "@services/devicesAPI";

export const usePriceSlider = (typeId) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const role = "diler";
    const [filter, setFilter] = useState({
        minPrice: 0,
        maxPrice: 0,
        initialPrice: {
            min: 0,
            max: 0,
        },
    });

    useEffect(() => {
        async function fetchPriceBoundaries() {
            const devices = await getDevicesWithParams({ "type.type_id": typeId });
            const searchMinPrice = Number(searchParams.get("minPrice"));
            const searchMaxPrice = Number(searchParams.get("maxPrice"));
            let maxPrice = 0;
            let minPrice = Infinity;

            devices.collection.forEach((device) => {
                const price =
                    role === "diler" ? device.special_price.diler : device.special_price.retail;
                if (price > maxPrice) maxPrice = price;
                if (price < minPrice) minPrice = price;
            });

            setFilter((prevFilter) => ({
                minPrice:
                    minPrice === Infinity ? 0 : searchMaxPrice ? searchMinPrice : minPrice,
                maxPrice: searchMaxPrice ? searchMaxPrice : maxPrice,
                initialPrice: {
                    min: minPrice,
                    max: maxPrice,
                },
            }));
        }
        fetchPriceBoundaries();
    }, [typeId, searchParams]);

    const changeHandler = useCallback((event) => {
        const { name, value } = event.target;
        setFilter((prevFilter) => ({ ...prevFilter, [name] : value }))
        searchParams.set(name, value);
        // eslint-disable-next-line
    }, [searchParams])

    const sliderHandler = useCallback((event) => {
        const [minPrice, maxPrice] = event;
        setFilter((prevFilter) => ({ ...prevFilter, minPrice, maxPrice }));
        // eslint-disable-next-line
    }, []);

    const afterChangeSliderHandler = useCallback((event) => {
        searchParams.set("minPrice", event[0]);
        searchParams.set("maxPrice", event[1]);
        setSearchParams(searchParams);
        // eslint-disable-next-line
    }, [searchParams, setSearchParams]);

    return {
        filter,
        changeHandler,
        sliderHandler,
        afterChangeSliderHandler
    }
}
