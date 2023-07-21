import { useEffect, useState } from "react";
import { getTypesWithParams } from "../services/typesAPI";
import { CATALOG_PAGE, STATIC_TYPES } from "../constants";
import { Link } from "react-router-dom";

export function useCategory({usage, limit, sort, Styles}) {
    const [categories, setCategories] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        async function getCategory() {
            try {
                const typeList = [];
                const types = await getTypesWithParams({ usage: usage }, limit, sort);
                for (let item of types) {
                    const categoryLink = `${CATALOG_PAGE}/${usage}/${item.group._id}/${item._id}`;

                    typeList.push(
                        <li className={Styles["list_item"]} key={item._id}>
                            <Link to={categoryLink}>
                                <div className={Styles.layer}>
                                    <p className={Styles.category}>{item.name}</p>
                                    <img
                                        className={Styles.image}
                                        src={`${STATIC_TYPES}/${item.image_ref}`}
                                        alt={item.name}
                                    />
                                </div>
                            </Link>
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