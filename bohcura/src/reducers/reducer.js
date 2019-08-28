import {
    FETCH_CHEF_DATA_START,
    FETCH_CHEF_DATA_SUCCESS,
    FETCH_CHEF_DATA_FAILURE,

    FETCH_RECIPES_DATA_START,
    FETCH_RECIPES_DATA_SUCCESS,
    FETCH_RECIPES_DATA_FAILURE
} from '../actions';

const initialState = {
    recipe: {},
    recipes: [],
    chefs: [],
    users: [],
    isLoading: false,
    error: '',
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        // This grabs the Chef Data
        case FETCH_CHEF_DATA_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case FETCH_CHEF_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: '',
                chefs: action.payload,
            }
        case FETCH_CHEF_DATA_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        // This grabs the Recipe Data
        case FETCH_RECIPES_DATA_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case FETCH_RECIPES_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: '',
                recipes: action.payload,
            }
        case FETCH_RECIPES_DATA_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
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