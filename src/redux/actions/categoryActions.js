import * as apiCalls from "../../api/apiCalls";
import * as catActionTypes from "../constants/categoryActionTypes";

const addCategoryActionCreator = (catData) => ({
    type: catActionTypes.CREATE_CATEGORY,
    // payload: catData,
});

export const newCategory = (categoryData) => async (dispatch) => {
    return await apiCalls.addCategory(categoryData).then((response) => {
        dispatch(addCategoryActionCreator(categoryData));
        return response;
    });
};
