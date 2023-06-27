import { brands } from "./api";

export async function getAllBrands() {
    const response = await brands.get("/all");
    return response.data
}

export async function getBrandById(id) {
    const response = await brands.get(`/${id}`);
    return response.data
}