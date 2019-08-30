import axios from 'axios';
// Chef DATA
export const FETCH_CHEF_DATA_START = 'FETCH_CHEF_DATA_START';
export const FETCH_CHEF_DATA_SUCCESS = 'FETCH_CHEF_DATA_SUCCESS';
export const FETCH_CHEF_DATA_FAILURE = 'FETCH_CHEF_DATA_FAILURE';
// Chef (Plural) DATA
export const FETCH_CHEFS_DATA_START = 'FETCH_CHEFS_DATA_START';
export const FETCH_CHEFS_DATA_SUCCESS = 'FETCH_CHEFS_DATA_SUCCESS';
export const FETCH_CHEFS_DATA_FAILURE = 'FETCH_CHEFS_DATA_FAILURE';
// Recipe DATA
export const FETCH_RECIPE_DATA_START = 'FETCH_RECIPE_DATA_START';
export const FETCH_RECIPE_DATA_SUCCESS = 'FETCH_RECIPE_DATA_SUCCESS';
export const FETCH_RECIPE_DATA_FAILURE = 'FETCH_RECIPE_DATA_FAILURE';
// Recipes (Plural) DATA
export const FETCH_RECIPES_DATA_START = 'FETCH_RECIPES_DATA_START';
export const FETCH_RECIPES_DATA_SUCCESS = 'FETCH_RECIPES_DATA_SUCCESS';
export const FETCH_RECIPES_DATA_FAILURE = 'FETCH_RECIPES_DATA_FAILURE';

export const getChef = (id) => {
  return dispatch => {
    dispatch({ type: FETCH_CHEF_DATA_START });
    axios
      .get(`https://chefportfolioo.herokuapp.com/api/chefs/${id}`)
      .then(res => {
        console.log('Single Chef', res.data);
        dispatch({ type: FETCH_CHEF_DATA_SUCCESS, payload: res.data });
      })
      .catch(e => {
        console.error(e, e.response);
        dispatch({ type: FETCH_CHEF_DATA_FAILURE });
      });
  };
};

export const getChefs = () => {
  return dispatch => {
    dispatch({ type: FETCH_CHEFS_DATA_START });
    axios
      .get('https://chefportfolioo.herokuapp.com/api/chefs') //Need to update this API call when I get the full path
      .then(res => {
        console.log('Inside Action Chef', res.data);
        dispatch({ type: FETCH_CHEFS_DATA_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: FETCH_CHEFS_DATA_FAILURE, payload: err.response });
      });
  };
};



export const getRecipes = () => {
    return dispatch => {
        dispatch({ type: FETCH_RECIPES_DATA_START });
        axios
            .get('https://chefportfolioo.herokuapp.com/api/recipe') //Need to update this API call when I get the full path
            .then(res => {
                console.log('Inside Action Recipes', res.data);
                dispatch({ type: FETCH_RECIPES_DATA_SUCCESS, payload: res.data });
            })
            .catch(err => {
                dispatch({ type: FETCH_RECIPES_DATA_FAILURE, payload: err.response });
            });
    };

};

export const getRecipe = (id) => {
    return dispatch => {
        dispatch({ type: FETCH_RECIPE_DATA_START });
        axios
            .get(`https://chefportfolioo.herokuapp.com/api/recipe/${id}`)
            .then(res => {
                console.log(res);
                dispatch({ type: FETCH_RECIPE_DATA_SUCCESS, payload: res.data });
            })
            .catch(e => {
                console.error(e);
                dispatch({ type: FETCH_RECIPE_DATA_FAILURE, payload: e.response });
            });
    };
};

// api/auth/register api/auth/login api/auth/logout api/users