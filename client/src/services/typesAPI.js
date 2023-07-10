import { handleError } from "../utils/handleError";
import { types } from "./api";

export async function getAllTypes() {
    try {
        const response = await types.get("/all");
        return response.data

    } catch (error) {
        handleError(error)
    }
}

export async function makeGetTypesWithParams(dataObject, limit, sort) {
    try {
        const response = await types.get("/all", {
            params: {
                query: dataObject,
                limit: limit,
                sort: sort,
            }
        })
        return response.data

    } catch (error) {
        handleError(error)
    }
}
