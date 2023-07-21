import { handleError } from "../utils/handleError";
import { groups } from "./api";

export async function getAllGroups() {
    try {
        const response = await groups.get("/all");
        return response.data

    } catch (error) {
        handleError(error)
    }
}

export async function getGroupsWithParams(dataObject, limit, sort, page, select) {
    try {
        const response = await groups.get("/all", {
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

export async function createGroup(formData) {
    try {
        const response = await groups.post("/create", formData);
        return response.data;
    } catch (error) {
        handleError(error)
    }
}

export async function updateGroup(id, formData) {
    try {
        const response = await groups.put(`/${id}`, formData);
        return response.data;
    } catch (error) {
        handleError(error)
    }
}

export async function updateGroupImage(id, formData) {
    try {
        const response = await groups.put(`/${id}/image`, formData);
        return response.data;
    } catch (error) {
        handleError(error)
    }
}


export async function getGroupByID(id) {
    try {
        const response = await groups.get(`/${id}`)
        return response.data;
    } catch (error) {
        handleError(error)
    }
}

export async function getTypeArrByGroupID(id) {
    try {
        const response = await groups.get(`/${id}`)
        return response.data;
    } catch (error) {
        handleError(error)
    }
}

export async function removeGroup(id) {
    try {
        const response = await groups.delete(`/${id}`);
        return response.data;
    } catch (error) {
        handleError(error)
    }
}


