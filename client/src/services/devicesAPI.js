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
        console.log("query: ", query)
        const params = { query }
        if (limit !== null) params.limit = limit;
        if (sort !== null) params.sort = sort;
        if (page !== null) params.page = page;
        if (select !== null) params.select = select;
        const response = await devices.get("/all", { params })
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

export async function getBrandNamesByTypes(typesIds) {
    try {
        const devices = await getDevicesWithParams({ "type.type_id": { $in: typesIds } });
        const uniqueIds = []
        const brandsList = devices.map(device => {
            return ({
                id: device.brand.brand_id,
                name: device.brand.brand_name,
            })
        }).filter((item) => {
            if (!uniqueIds.includes(item.id)) {
                uniqueIds.push(item.id)
                return true
            } else {

                return false
            }
        })
        return brandsList;
    } catch (error) {
        console.error(error)
    }
}