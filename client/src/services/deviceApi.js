import { devices } from "./api";

export const getDevices = async(searchParams) => {
        const response = await devices.get(`/all${searchParams}`);
        return response.data;
}

export const getDeviceById = async (id) => {
    const response = await devices.get(`/${id}`);
    return response.data
}

export const createDevice = async (deviceData) => {
    const response = await devices.post("/", );
    return response.data
}