import * as CATEGORY_ACTIONS from "../constants/categoryActionTypes";

const initialState = { categories: [] };

export const categoryReducer = (state = initialState, action) => {
    if (action.type === CATEGORY_ACTIONS.GET_CATEGORIES) {
        return {
            ...state,
            categories: action.payload,
        };
    } else if (action.type === CATEGORY_ACTIONS.CREATE_CATEGORY) {
        return {
            ...state,
        };
    }
    return state;
};
