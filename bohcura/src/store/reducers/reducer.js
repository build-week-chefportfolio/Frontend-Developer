import * as actions from '../actions';

const initialState = {
    recipe: {},
    recipes: [],
    chef: {},
    chefs: [],
    users: [],
    isLoading: false,
    error: '',
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {

        // This grabs the Chef Data
        case actions.FETCH_CHEF_DATA_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            };
        case actions.FETCH_CHEF_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: '',
                chef: action.payload,
            };
        case actions.FETCH_CHEF_DATA_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        case actions.FETCH_CHEFS_DATA_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            };
        case actions.FETCH_CHEFS_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: '',
                chefs: action.payload,
            };
        case actions.FETCH_CHEFS_DATA_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        // This grabs the Recipe Data
        case actions.FETCH_RECIPES_DATA_START:

            return {
                ...state,
                isLoading: true,
                error: ''
            };
        case actions.FETCH_RECIPES_DATA_SUCCESS:

            return {
                ...state,
                isLoading: false,
                error: '',
                recipes: action.payload,
            };
        case actions.FETCH_RECIPES_DATA_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        case actions.FETCH_RECIPE_DATA_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            };
        case actions.FETCH_RECIPE_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: '',
                recipe: action.payload
            };
        case actions.FETCH_RECIPE_DATA_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        case actions.UPDATES_CURRENT_RECIPE_DATA_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            };
        case actions.UPDATES_CURRENT_RECIPE_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: '',
                recipes: [...state.recipes, action.payload],
                chef: { ...state.chef, recipe: [ ...state.chef.recipe, action.payload ] }
            };
        case actions.UPDATES_CURRENT_RECIPE_DATA_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };

        case actions.DELETE_RECIPE_DATA_START:
            return {
                ...state,
                isLoading: true,
                error: '',
            };
        case actions.DELETE_RECIPE_DATA_SUCCESS:
            console.log('Deleted ID: ', action.deleted);
            let newRecipes = state.chef.recipe.filter(r => r.id !== action.deleted);
            console.log('New Recipes: ', newRecipes);
            return {
                ...state,
                isLoading: false,
                error: '',
                chef: { ...state.chef, recipe: [ ...newRecipes ] }
            };
        default:
            return state;
    }
};

/*
    recipes: [{
        id: '',
        image: '',
        name: '',
        prepTime: '',
        description: '',
        chefName: ''
    }],

    chefs: [{
        id: '',
        firstName: '',
        lastName: '',
        yearsXP: '',
        city: '',
        state: '',
        relocate: '',
        contact: 'email || phone || both'
        phone: '',
        email: '',
        public: bool,
        recipes: []
    }]
*/