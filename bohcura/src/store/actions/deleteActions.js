import axios from 'axios';
// Chef DATA
export const DELETE_CHEF_DATA_START = 'DELETE_CHEF_DATA_START';
export const DELETE_CHEF_DATA_SUCCESS = 'DELETE_CHEF_DATA_SUCCESS';
export const DELETE_CHEF_DATA_FAILURE = 'DELETE_CHEF_DATA_FAILURE';
// Recipe DATA
export const DELETE_RECIPE_DATA_START = 'DELETE_RECIPE_DATA_START';
export const DELETE_RECIPE_DATA_SUCCESS = 'DELETE_RECIPE_DATA_SUCCESS';
export const DELETE_RECIPE_DATA_FAILURE = 'DELETE_RECIPE_DATA_FAILURE';

export const deleteChefs = (item) => {
    return dispatch => {
        dispatch({ type: DELETE_CHEF_DATA_START });
        axios
            .delete('https://chefportfolioo.herokuapp.com/api/chefs', item) //Need to update this API call when I get the full path
            .then(res => {
                // res.data.data
                console.log(res);
                dispatch({ type: DELETE_CHEF_DATA_SUCCESS, payload: res.data });
            })
            .catch(err => {
                dispatch({ type: DELETE_CHEF_DATA_FAILURE, payload: err.response });
            });
    };
};

export const deleteRecipe = (id) => {
    return dispatch => {
        dispatch({ type: DELETE_RECIPE_DATA_START });
        axios
            .delete(`https://chefportfolioo.herokuapp.com/api/recipe/delete/${id}`) //Need to update this API call when I get the full path
            .then(res => {
                // res.data.data
                console.log(res);
                dispatch({ type: DELETE_RECIPE_DATA_SUCCESS, payload: res.data, deleted: id });
            })
            .catch(err => {
                dispatch({ type: DELETE_RECIPE_DATA_FAILURE, payload: err.response });
            });
    };
};