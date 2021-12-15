import * as apiCalls from "../../api/apiCalls";
import * as catActionTypes from "../constants/categoryActionTypes";

const addCategoryActionCreator = (catData) => ({
    type: catActionTypes.CREATE_CATEGORY,
    // payload: catData,
});

export const newCategory = (categoryData) => async (dispatch) => {
    const response = await apiCalls.addCategory(categoryData);
    dispatch(addCategoryActionCreator(response.data));
    return response;
};

export const allCategories = () => async (dispatch) => {
    const response = await apiCalls.fetchCategories();
    dispatch({
        type: catActionTypes.GET_CATEGORIES,
        payload: response.data,
    });
    return response;
};
