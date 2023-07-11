import { docs } from "./api";
import { handleError } from "@utils/handleError";

export async function createDoc(formData) {
    try {
        const response = await docs.post("/upload", formData);
        return response.data
    } catch (error) {
        handleError(error)
    }
}

export async function getDocsWithParams(dataObject, limit, sort, page, select) {
    try {
        const response = await docs.get("/all", {
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

export async function getDocByID(id) {
    try {
        const response = await docs.get(`/${id}`)
        return response.data;
    } catch (error) {
        handleError(error)
    }
}

export async function getDocById(id) {
    try {
        const response = await docs.get(`/${id}`);
        return response.data
    } catch (error) {
        handleError(error)
    }
}

export async function removeDoc(id) {
    try {
        const response = await docs.delete(`/${id}`);
        return response.data
    } catch (error) {
        handleError(error)
    }
}