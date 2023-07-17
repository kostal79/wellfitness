import { devices } from "./api";
import { handleError } from "@utils/handleError";

export async function createDevice(formData) {
    try {
        const response = await devices.post("/create", formData);
        return response.data
    } catch (error) {
        handleError(error)
    }
}

export async function getDevicesWithParams(dataObject, limit, sort, page, select) {
    try {
        const response = await devices.get("/all", {
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

export async function getDeviceById(id) {
    try {
        const response = await devices.get(`/${id}`);
        return response.data
    } catch (error) {
        handleError(error)
    }
}

export async function updateDevice(id, formData) {
    try {
        const response = await devices.put(`/${id}`, formData);
        return response.data;
    } catch (error) {
        handleError(error)
    }
}

export async function removeDevice(id) {
    try {
        const response = await devices.delete(`/${id}`);
        return response.data
    } catch (error) {
        handleError(error)
    }
}