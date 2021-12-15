import * as api from "./apiConfig";
import axios from "axios";

export const addCategory = (category) =>
    axios.post(api.API_BASE_URL + "/api/estelle-shop/1.0/category", category);

export const fetchCategories = () =>
    axios.get(api.API_BASE_URL + "/api/estelle-shop/1.0/category");
