import * as apiCalls from "../../api/apiCalls";
import * as catActionTypes from "../constants/categoryActionTypes";

const addCategoryActionCreator = (catData) => ({
    type: catActionTypes.CREATE_CATEGORY,
    // payload: catData,
});

const getCategories = (categoryList) => ({
    type: catActionTypes.GET_CATEGORIES,
    payload: categoryList,
});

export const newCategory = (categoryData) => async (dispatch) => {
    const response = await apiCalls.addCategory(categoryData);
    dispatch(addCategoryActionCreator(response.data));
    return response;
};

export const allCategories = () => async (dispatch) => {
    const response = await apiCalls.fetchCategories();
    dispatch(getCategories(response.data));
    return response;
};
