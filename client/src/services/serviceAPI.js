import { handleError } from "@utils/handleError";
import { service } from "./api";

export async function getAllServices() {
    try {
        const response = await service.get("/all");
        return response.data

    } catch (error) {
        handleError(error)
    }
}

export async function getServicesWithParams(dataObject, limit, sort, page, select) {
    try {
        const response = await service.get("/all", {
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

export async function getServiceByID(id) {
    try {
        const response = await service.get(`/${id}`)
        return response.data;
    } catch (error) {
        handleError(error)
    }
}

export async function createService(formData) {
    try {
        const response = await service.post("/create", formData);
        return response.data;
    } catch (error) {
        handleError(error)
    }
}

export async function updateService(id, formData) {
    try {
        const response = await service.put(`/${id}`, formData);
        return response.data;
    } catch (error) {
        handleError(error)
    }
}

export async function removeService(id) {
    try {
        const response = await service.delete(`/${id}`);
        return response.data;
    } catch (error) {
        handleError(error)
    }
}

