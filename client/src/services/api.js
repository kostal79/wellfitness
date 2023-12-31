import axios from "axios"
import { BASE_URL } from "../constants"

export const devices = axios.create({baseURL: `${BASE_URL}/devices`});
export const brands = axios.create({baseURL: `${BASE_URL}/brands`});
export const blogs = axios.create({baseURL: `${BASE_URL}/blogs`})
export const baskets = axios.create({baseURL: `${BASE_URL}/basket`});
export const docs = axios.create({baseURL: `${BASE_URL}/docs`});
export const feedback = axios.create({baseURL: `${BASE_URL}/feedbaks`});
export const users = axios.create({baseURL: `${BASE_URL}/users`});
export const messages = axios.create({baseURL: `${BASE_URL}/messages`});
export const orders = axios.create({baseURL: `${BASE_URL}/orders`});
export const projects = axios.create({baseURL: `${BASE_URL}/projects`});
export const service = axios.create({baseURL: `${BASE_URL}/service`});
export const shops = axios.create({baseURL: `${BASE_URL}/shops`});
export const types = axios.create({baseURL: `${BASE_URL}/types`});
export const groups = axios.create({baseURL: `${BASE_URL}/groups`});
export const videoinstructions = axios.create({baseURL: `${BASE_URL}/videoinstructions`});

