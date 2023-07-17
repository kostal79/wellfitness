import { useEffect, useState } from "react";
import { getTypesWithParams } from "../services/typesAPI";
import makeQueryParams from "../utils/makeQueryParams";
import { CATALOG_PAGE, SERVER_URL, STATIC_TYPES } from "../constants";
import { NavLink } from "react-router-dom";

export function useCategory({usage, limit, sort, Styles}) {
    const [categories, setCategories] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        async function getCategory() {
            try {
                const typeList = [];
                const types = await getTypesWithParams({ usage: usage }, limit, sort);
                for (let item of types) {
                    const categoryLink = `${CATALOG_PAGE}?${makeQueryParams({
                        type: item.name,
                        usage: usage,
                    })}`;

                    typeList.push(
                        <li className={Styles["list_item"]} key={item._id}>
                            <NavLink to={categoryLink}>
                                <div className={Styles.layer}>
                                    <p className={Styles.category}>{item.name}</p>
                                    <img
                                        className={Styles.image}
                                        src={`${STATIC_TYPES}/${item.image_ref}`}
                                        alt={item.name}
                                    />
                                </div>
                            </NavLink>
                        </li>
                    );
                }
                setCategories(typeList);
            } catch (error) {
                setError("error occured!!!")
            }
        }
        getCategory()
    }, [usage]);

    return [categories, error]

}