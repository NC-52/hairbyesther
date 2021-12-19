import * as productActions from "../constants/productActionTypes";

const initialState = {
    all: [],
    product: {},
};

export const productReducer = (state = initialState, action) => {
    if (action.type === productActions.GET_PRODUCTS) {
        return { ...state, all: [...action.payload] };
    } else if (action.type === productActions.ADD_PRODUCT) {
        return { ...state };
    } else if (action.type === productActions.GET_PRODUCT) {
        return { ...state, product: { ...action.payload } };
    }
    return state;
};
