import { useEffect, useState } from "react";
import { getBrandsWithParams } from "@services/brandsAPI";
import { NavLink } from "react-router-dom";
import { BRANDS_PAGE, STATIC_BRANDS } from "../constants";

export const useBrandList = (arr, Styles) => {
    const [filter, setFilter] = useState(arr[0]);
    const [brandList, setBrandList] = useState([]);

    useEffect(() => {
        async function getBrandList() {
            const brandList = await getBrandsWithParams();
            const sortedList = brandList.filter((brand) => {
                for (let type of brand.devices_types) {
                    if (type.name === filter) {
                        return true;
                    }
                }
                return false;
            });

            const list = sortedList.map((brand) => {
                return (
                    <NavLink to={`${BRANDS_PAGE}/${brand._id}`} key={brand._id}>
                        <div className={Styles["grid-cell"]}>
                            <img
                                src={`${STATIC_BRANDS}/${brand.logo_ref}`}
                                alt={brand.name}
                            />
                        </div>
                    </NavLink>
                );
            });
            setBrandList(list);
        }
        getBrandList();
    }, [filter]);

    const filterHandler = (value) => {
        setFilter(value);
    };

    const classNameItem = (value) => {
        const classNames = [Styles["list_item"]];
        if (value === filter) {
            classNames.push(Styles["list_item--active"]);
        }
        return classNames.join(" ");
    };

    const filterList = () => {
        return arr.map((item) => {
            return (
                <li
                    className={classNameItem(item)}
                    onClick={() => filterHandler(item)}
                    key={item}
                >
                    {item}
                </li>
            );
        });
    };

    return { brandList, filterList }
}