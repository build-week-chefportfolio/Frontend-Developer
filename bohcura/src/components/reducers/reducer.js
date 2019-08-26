import { } from '../actions';

const initialState = {
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
        contact: 'email || phone || both',
        phone: '',
        email: '',
        public: bool,
        recipes: []
    }],
    users: [],
    isLoading: false,
    error: '',
};


export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SMURF_DATA_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            };
        case FETCH_SMURF_DATA_SUCCESS:
            console.log('This should be an array', action.payload)
            return {
                ...state,
                isLoading: false,
                smurfs: action.payload,
                error: ''
            };
        case FETCH_SMURF_DATA_FAILURE:
            console.log('This should be an array', action.payload)
            return {
                ...state,
                isLoading: false,
                error: action.payload
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