import * as productActions from "../constants/productActionTypes";
import * as apiCalls from "../../api/apiCalls";

export const saveProduct = (productData) => async (dispatch) => {
    const products = await apiCalls.addNewProduct(productData);
    dispatch({
        type: productActions.ADD_PRODUCT,
    });
    return products;
};

export const getAllProducts = () => async (dispatch) => {
    const products = await apiCalls.fetchProducts();
    dispatch({
        type: productActions.GET_PRODUCTS,
        payload: products.data,
    });
};
