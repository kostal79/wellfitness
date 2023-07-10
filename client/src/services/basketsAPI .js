import { handleError } from "../utils/handleError";
import { baskets } from "./api";

export async function getAllBaskets() {
    try {
        const response = await baskets.get("/all");
        return response.data

    } catch (error) {
        handleError(error)
    }
}

export async function getBasketsWithParams(dataObject, limit, sort, page, select) {
    try {
        const response = await baskets.get("/all", {
            params: {
                query: dataObject,
                limit: limit,
                sort: sort,
                page: page,
                select: select,
            }
        })
        return response.data

    } catch (error) {
        handleError(error)
    }
}

export async function createBasket(dataObject) {
    try {
        const response = await baskets.post("/create", dataObject);
        return response.data;
    } catch (error) {
        handleError(error)
    }
}

export async function updateBasket(id, dataObject) {
    try {
        const response = await baskets.put(`/${id}`, dataObject);
        return response.data;
    } catch (error) {
        handleError(error)
    }
}
