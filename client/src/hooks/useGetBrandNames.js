import { useEffect, useState } from "react";
import { getBrandNamesByTypes } from "../services/devicesAPI";

export const useGetBrandNames = (typeId) => {
    const [brands, setBrands] = useState([])

    useEffect(() => {
        async function fetchBrands() {
            const brandsArr = await getBrandNamesByTypes(typeId);
            setBrands(brandsArr)
        }
        fetchBrands()
    }, [typeId])
    return brands
}