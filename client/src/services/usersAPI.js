import { handleError } from "@utils/handleError";
import { users } from "./api";

export async function getAllUsers() {
    try {
        const response = await users.get("/all");
        return response.data

    } catch (error) {
        handleError(error)
    }
}

export async function getUserWithParams(dataObject, limit, sort, page, select) {
    try {
        const response = await users.get("/all", {
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

export async function getUserByID(id) {
    try {
        const response = await users.get(`/${id}`)
        return response.data;
    } catch (error) {
        handleError(error)
    }
}

export async function createUser(formData) {
    try {
        const response = await users.post("/create", formData);
        return response.data;
    } catch (error) {
        handleError(error)
    }
}

export async function updateUser(id, formData) {
    try {
        const response = await users.put(`/${id}`, formData);
        return response.data;
    } catch (error) {
        handleError(error)
    }
}

export async function removeUser(id) {
    try {
        const response = await users.delete(`/${id}`);
        return response.data;
    } catch (error) {
        handleError(error)
    }
}

