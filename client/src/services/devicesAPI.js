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

export async function getDevicesWithParams(query, limit, sort, page, select) {
    try {
        const params = { query }
        if (limit !== null) params.limit = limit;
        if (sort !== null) params.sort = sort;
        if (page !== null) params.page = page;
        if (select !== null) params.select = select;

        const response = await devices.get("/all", {params})
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