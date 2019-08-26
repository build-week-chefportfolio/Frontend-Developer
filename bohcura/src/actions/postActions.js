import axios from 'axios';
// Chef Data 
export const UPDATES_CURRENT_CHEF_DATA_START = 'UPDATES_CURRENT_CHEF_DATA_START';
export const UPDATES_CURRENT_CHEF_DATA_SUCCESS = 'UPDATES_CURRENT_CHEF_DATA_SUCCESS';
export const UPDATES_CURRENT_CHEF_DATA_FAILURE = 'UPDATES_CURRENT_CHEF_DATA_FAILURE';
// Recipe Data
export const UPDATES_CURRENT_RECIPE_DATA_START = 'UPDATES_CURRENT_RECIPE_DATA_START';
export const UPDATES_CURRENT_RECIPE_DATA_SUCCESS = 'UPDATES_CURRENT_RECIPE_DATA_SUCCESS';
export const UPDATES_CURRENT_RECIPE_DATA_FAILURE = 'UPDATES_CURRENT_RECIPE_DATA_FAILURE';

export const postChefs = (info) => {
    return dispatch => {
        dispatch({ type: UPDATES_CURRENT_CHEF_DATA_START });
        axios
            .post('https://chefportfolioo.herokuapp.com/api/chefs', info) //Need to update this API call when I get the full path
            .then(res => {
                // res.data.data
                console.log(res);
                dispatch({ type: UPDATES_CURRENT_CHEF_DATA_SUCCESS, payload: res.data.sets });
            })
            .catch(err => {
                dispatch({ type: UPDATES_CURRENT_CHEF_DATA_FAILURE, payload: err.response });
            });
    };
};

export const postRecipes = (info) => {
    return dispatch => {
        dispatch({ type: UPDATES_CURRENT_RECIPE_DATA_START });
        axios
            .post('https://chefportfolioo.herokuapp.com/api/recipes', info) //Need to update this API call when I get the full path
            .then(res => {
                // res.data.data
                console.log(res);
                dispatch({ type: UPDATES_CURRENT_RECIPE_DATA_SUCCESS, payload: res.data.sets });
            })
            .catch(err => {
                dispatch({ type: UPDATES_CURRENT_RECIPE_DATA_FAILURE, payload: err.response });
            });
    };
};