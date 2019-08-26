import axios from 'axios';
// Chef DATA
export const FETCH_CHEF_DATA_START = 'FETCH_CHEF_DATA_START';
export const FETCH_CHEF_DATA_SUCCESS = 'FETCH_CHEF_DATA_SUCCESS';
export const FETCH_CHEF_DATA_FAILURE = 'FETCH_CHEF_DATA_FAILURE';
// Recipe DATA
export const FETCH_RECIPE_DATA_START = 'FETCH_RECIPE_DATA_START';
export const FETCH_RECIPE_DATA_SUCCESS = 'FETCH_RECIPE_DATA_SUCCESS';
export const FETCH_RECIPE_DATA_FAILURE = 'FETCH_RECIPE_DATA_FAILURE';

export const getChefs = () => {
    return dispatch => {
        dispatch({ type: FETCH_CHEF_DATA_START });
        axios
            .get('https://chefportfolioo.herokuapp.com/api/chefs') //Need to update this API call when I get the full path
            .then(res => {
                // res.data.data
                console.log(res);
                dispatch({ type: FETCH_CHEF_DATA_SUCCESS, payload: res.data.sets });
            })
            .catch(err => {
                dispatch({ type: FETCH_CHEF_DATA_FAILURE, payload: err.response });
            });
    };
};

export const getRecipes = () => {
    return dispatch => {
        dispatch({ type: FETCH_RECIPE_DATA_START });
        axios
            .get('https://chefportfolioo.herokuapp.com/api/recipes') //Need to update this API call when I get the full path
            .then(res => {
                // res.data.data
                console.log(res);
                dispatch({ type: FETCH_RECIPE_DATA_SUCCESS, payload: res.data.sets });
            })
            .catch(err => {
                dispatch({ type: FETCH_RECIPE_DATA_FAILURE, payload: err.response });
            });
    };
};