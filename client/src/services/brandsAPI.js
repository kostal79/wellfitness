import { handleError } from "../utils/handleError";
import { brands } from "./api";


export async function createBrand(formData) {
    try {
        const response = await brands.post("/create", formData);
        return response.data
    } catch (error) {
        handleError(error)
    }
}

export async function getBrandsWithParams(dataObject, limit, sort, page, select) {
    try {
        const response = await brands.get("/all", {
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

export async function getBrandById(id) {
    try {
        const response = await brands.get(`/${id}`);
        return response.data
    } catch (error) {
        handleError(error)
    }
}

export async function updateBrand(id, formData) {
    try {
        const response = await brands.put(`/${id}`, formData);
        return response.data;
    } catch (error) {
        handleError(error)
    }
}

export async function removeBrand(id) {
    try {
        const response = await brands.delete(`/${id}`);
        return response.data
    } catch (error) {
        handleError(error)
    }
}