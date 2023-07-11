import { handleError } from "@utils/handleError";
import { videoinstructions } from "./api";

export async function getAllVideoinstructions() {
    try {
        const response = await videoinstructions.get("/all");
        return response.data

    } catch (error) {
        handleError(error)
    }
}

export async function getVideoinstructionWithParams(dataObject, limit, sort, page, select) {
    try {
        const response = await videoinstructions.get("/all", {
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

export async function getVideoinstructionByID(id) {
    try {
        const response = await videoinstructions.get(`/${id}`)
        return response.data;
    } catch (error) {
        handleError(error)
    }
}

export async function createVideoinstruction(formData) {
    try {
        const response = await videoinstructions.post("/create", formData);
        return response.data;
    } catch (error) {
        handleError(error)
    }
}

export async function updateVideoinstruction(id, formData) {
    try {
        const response = await videoinstructions.put(`/${id}`, formData);
        return response.data;
    } catch (error) {
        handleError(error)
    }
}

export async function removeVideoinstruction(id) {
    try {
        const response = await videoinstructions.delete(`/${id}`);
        return response.data;
    } catch (error) {
        handleError(error)
    }
}

