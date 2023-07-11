import { handleError } from "@utils/handleError";
import { shops } from "./api";

export async function getAllServices() {
    try {
        const response = await shops.get("/all");
        return response.data

    } catch (error) {
        handleError(error)
    }
}

export async function getShopsWithParams(dataObject, limit, sort, page, select) {
    try {
        const response = await shops.get("/all", {
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

export async function getShopByID(id) {
    try {
        const response = await shops.get(`/${id}`)
        return response.data;
    } catch (error) {
        handleError(error)
    }
}

export async function createShop(formData) {
    try {
        const response = await shops.post("/create", formData);
        return response.data;
    } catch (error) {
        handleError(error)
    }
}

export async function updateShop(id, formData) {
    try {
        const response = await shops.put(`/${id}`, formData);
        return response.data;
    } catch (error) {
        handleError(error)
    }
}

export async function removeShop(id) {
    try {
        const response = await shops.delete(`/${id}`);
        return response.data;
    } catch (error) {
        handleError(error)
    }
}

