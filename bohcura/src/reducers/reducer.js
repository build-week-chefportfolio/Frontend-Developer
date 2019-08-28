<<<<<<< HEAD
import * as actions from '../actions'
=======
import * as actions from '../actions';
>>>>>>> 022a681b60c9eadba7deb1e7c2d1d351b98ba7b4

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
<<<<<<< HEAD
        // This grabs the Chef Data
=======
      // This grabs the Chef Data
>>>>>>> 022a681b60c9eadba7deb1e7c2d1d351b98ba7b4
        case actions.FETCH_CHEF_DATA_START:
            return {
                ...state,
                isLoading: true,
                error: ''
<<<<<<< HEAD
            }
=======
            };
>>>>>>> 022a681b60c9eadba7deb1e7c2d1d351b98ba7b4
        case actions.FETCH_CHEF_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: '',
                chefs: action.payload,
<<<<<<< HEAD
            }
=======
            };
>>>>>>> 022a681b60c9eadba7deb1e7c2d1d351b98ba7b4
        case actions.FETCH_CHEF_DATA_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
<<<<<<< HEAD
            }
        // This grabs the Recipe Data
=======
            };
      // This grabs the Recipe Data
>>>>>>> 022a681b60c9eadba7deb1e7c2d1d351b98ba7b4
        case actions.FETCH_RECIPES_DATA_START:
            return {
                ...state,
                isLoading: true,
                error: ''
<<<<<<< HEAD
            }
=======
            };
>>>>>>> 022a681b60c9eadba7deb1e7c2d1d351b98ba7b4
        case actions.FETCH_RECIPES_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: '',
                recipes: action.payload,
<<<<<<< HEAD
            }
=======
            };
>>>>>>> 022a681b60c9eadba7deb1e7c2d1d351b98ba7b4
        case actions.FETCH_RECIPES_DATA_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
<<<<<<< HEAD
            }
=======
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
>>>>>>> 022a681b60c9eadba7deb1e7c2d1d351b98ba7b4
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