import { handleError } from "@utils/handleError";
import { orders } from "./api";

export async function getAllOrders() {
    try {
        const response = await orders.get("/all");
        return response.data

    } catch (error) {
        handleError(error)
    }
}

export async function getOrdersWithParams(dataObject, limit, sort, page, select) {
    try {
        const response = await orders.get("/all", {
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

export async function getOrderByID(id) {
    try {
        const response = await orders.get(`/${id}`)
        return response.data;
    } catch (error) {
        handleError(error)
    }
}

export async function createOrder(formData) {
    try {
        const response = await orders.post("/create", formData);
        return response.data;
    } catch (error) {
        handleError(error)
    }
}

export async function updateOrder(id, formData) {
    try {
        const response = await orders.put(`/${id}`, formData);
        return response.data;
    } catch (error) {
        handleError(error)
    }
}

export async function removeOrder(id) {
    try {
        const response = await orders.delete(`/${id}`);
        return response.data;
    } catch (error) {
        handleError(error)
    }
}

