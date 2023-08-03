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

        const response = await devices.get("/all", { params, headers: { 'Content-Type': 'application/json' } })
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

export async function getBrandNamesByTypes(typeId, field) {
    try {
        const query = { "type.type_id":  typeId };
        const brandList = await devices.get("/dist", {params: {query, field: field}})
        return brandList.data;
    } catch (error) {
        console.error(error)
    }
}