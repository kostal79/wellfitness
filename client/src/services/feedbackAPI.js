import { handleError } from "@utils/handleError";
import { feedback } from "./api";

export async function getAllFeedbacks() {
    try {
        const response = await feedback.get("/all");
        return response.data

    } catch (error) {
        handleError(error)
    }
}

export async function makeGetFeedbacksWithParams(dataObject, limit, sort, page, select) {
    try {
        const response = await feedback.get("/all", {
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

export async function getFeedbackByID(id) {
    try {
        const response = await feedback.get(`/${id}`)
        return response.data;
    } catch (error) {
        handleError(error)
    }
}

export async function createFeedback(formData) {
    try {
        const response = await feedback.post("/create", formData);
        return response.data;
    } catch (error) {
        handleError(error)
    }
}

export async function updateFeedback(id, formData) {
    try {
        const response = await feedback.put(`/${id}`, formData);
        return response.data;
    } catch (error) {
        handleError(error)
    }
}

export async function removeFeedback(id) {
    try {
        const response = await feedback.delete(`/${id}`);
        return response.data;
    } catch (error) {
        handleError(error)
    }
}

