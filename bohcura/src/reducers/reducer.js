// import { } from '../actions';

const initialState = {
    recipes: [{
        id: '',
        image: '',
        name: '',
        prepTime: '',
        description: '',
        chefName: '',
    }],
    chefs: [{
        id: '',
        firstName: '',
        lastName: '',
        yearsXP: '',
        city: '',
        state: '',
        relocate: true,
        contact: 'email || phone || both',
        phone: '',
        email: '',
        public: true,
        recipes: []
    }],
    users: [],
    isLoading: false,
    error: '',
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {

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