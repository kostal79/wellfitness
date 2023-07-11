import { handleError } from "@utils/handleError";
import { projects } from "./api";

export async function getAllProjects() {
    try {
        const response = await projects.get("/all");
        return response.data

    } catch (error) {
        handleError(error)
    }
}

export async function getProjectsWithParams(dataObject, limit, sort, page, select) {
    try {
        const response = await projects.get("/all", {
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

export async function getProjectByID(id) {
    try {
        const response = await projects.get(`/${id}`)
        return response.data;
    } catch (error) {
        handleError(error)
    }
}

export async function createProject(formData) {
    try {
        const response = await projects.post("/create", formData);
        return response.data;
    } catch (error) {
        handleError(error)
    }
}

export async function updateProject(id, formData) {
    try {
        const response = await projects.put(`/${id}`, formData);
        return response.data;
    } catch (error) {
        handleError(error)
    }
}

export async function removeProject(id) {
    try {
        const response = await projects.delete(`/${id}`);
        return response.data;
    } catch (error) {
        handleError(error)
    }
}

