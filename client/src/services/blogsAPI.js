import { handleError } from "../utils/handleError";
import { blogs } from "./api";

export async function getAllBlogs() {
    try {
        const response = await blogs.get("/all");
        return response.data

    } catch (error) {
        handleError(error)
    }
}

export async function getBlogsWithParams(dataObject, limit, sort, page, select) {
    try {
        const response = await blogs.get("/all", {
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

export async function createBlog(dataObject) {
    try {
        const response = await blogs.post("/create", dataObject);
        return response.data;
    } catch (error) {
        handleError(error)
    }
}

export async function getBlogByID(id) {
    try {
        const response = await blogs.get(`/${id}`)
        return response.data;
    } catch (error) {
        handleError(error)
    }
}

export async function updateBlog(id, dataObject) {
    try {
        const response = await blogs.put(`/${id}`, dataObject);
        return response.data;
    } catch (error) {
        handleError(error)
    }
}

export async function removeBlog(id) {
    try {
        const response = await blogs.delete(`/${id}`);
        return response.data;
    } catch (error) {
        handleError(error)
    }
}

