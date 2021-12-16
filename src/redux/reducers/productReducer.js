import * as productActions from "../constants/productActionTypes";

const initialState = [];

export const productReducer = (state = initialState, action) => {
    if (action.type === productActions.GET_PRODUCTS) {
        return [...action.payload];
    } else if (action.type === productActions.ADD_PRODUCT) {
        return [...state];
    }
    return state;
};
