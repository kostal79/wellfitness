import { handleError } from "@utils/handleError";
import { messages } from "./api";

export async function getAllMessages() {
    try {
        const response = await messages.get("/all");
        return response.data

    } catch (error) {
        handleError(error)
    }
}

export async function getMessagesWithParams(dataObject, limit, sort, page, select) {
    try {
        const response = await messages.get("/all", {
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

export async function getMessageByID(id) {
    try {
        const response = await messages.get(`/${id}`)
        return response.data;
    } catch (error) {
        handleError(error)
    }
}

export async function createMessage(formData) {
    try {
        const response = await messages.post("/create", formData);
        return response.data;
    } catch (error) {
        handleError(error)
    }
}

export async function updateMessage(id, formData) {
    try {
        const response = await messages.put(`/${id}`, formData);
        return response.data;
    } catch (error) {
        handleError(error)
    }
}

export async function removeMessage(id) {
    try {
        const response = await messages.delete(`/${id}`);
        return response.data;
    } catch (error) {
        handleError(error)
    }
}

