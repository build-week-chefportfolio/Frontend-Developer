import axios from 'axios'
// Chef Data 
export const PUT_CURRENT_CHEF_DATA_START = 'PUT_CURRENT_CHEF_DATA_START'
export const PUT_CURRENT_CHEF_DATA_SUCCESS = 'PUT_CURRENT_CHEF_DATA_SUCCESS'
export const PUT_CURRENT_CHEF_DATA_FAILURE = 'PUT_CURRENT_CHEF_DATA_FAILURE'
// Recipe Data
export const PUT_CURRENT_RECIPE_DATA_START = 'PUT_CURRENT_RECIPE_DATA_START'
export const PUT_CURRENT_RECIPE_DATA_SUCCESS = 'PUT_CURRENT_RECIPE_DATA_SUCCESS'
export const PUT_CURRENT_RECIPE_DATA_FAILURE = 'PUT_CURRENT_RECIPE_DATA_FAILURE'

export const putChefs = (info) => {
    return dispatch => {
        dispatch({ type: PUT_CURRENT_CHEF_DATA_START });
        axios
            .put('https://chefportfolioo.herokuapp.com/api/chefs', info) //Need to update this API call when I get the full path
            .then(res => {
                // res.data.data
                console.log(res);
                dispatch({ type: PUT_CURRENT_CHEF_DATA_SUCCESS, payload: res.data.sets });
            })
            .catch(err => {
                dispatch({ type: PUT_CURRENT_CHEF_DATA_FAILURE, payload: err.response });
            })
    }
}

export const putRecipe = (id) => {
    return dispatch => {
        dispatch({ type: PUT_CURRENT_RECIPE_DATA_START })
        axios
            .put(`https://chefportfolioo.herokuapp.com/api/recipe/delete/${id}`, info) //Need to update this API call when I get the full path
            .then(res => {
                // res.data.data
                console.log(res)
                dispatch({ type: PUT_CURRENT_RECIPE_DATA_SUCCESS, payload: res.data.sets })
            })
            .catch(err => {
                dispatch({ type: PUT_CURRENT_RECIPE_DATA_FAILURE, payload: err.response })
            })
    }
}