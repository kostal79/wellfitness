import { handleError } from "../utils/handleError";
import { types } from "./api";

export async function getAllTypes() {
    try {
        const response = await types.get("/all");
        return response.data

    } catch (error) {
        handleError(error)
    }
}

export async function makeGetTypesWithParams(dataObject, limit, sort, page, select) {
    try {
        const response = await types.get("/all", {
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

export async function createType(formData) {
    try {
        const response = await types.post("/create", formData);
        return response.data;
    } catch (error) {
        handleError(error)
    }
}

export async function updateType(id, formData) {
    try {
        const response = await types.put(`/${id}`, formData);
        return response.data;
    } catch (error) {
        handleError(error)
    }
}

export async function removeType(id) {
    try {
        const response = await types.delete(`/${id}`);
        return response.data;
    } catch (error) {
        handleError(error)
    }
}

export async function updateImageType(id, formData) {
    try {
        const response = await types.put(`/${id}/image`, formData);
        return response.data;
    } catch (error) {
        handleError(error)
    }
}
