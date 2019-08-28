/* Onboarding 1: Personal Info
* Onboarding 2: Contact Settings
* Onboarding 3: Confirmation & Review
* Onboarding 4: Success
* */

import React, { useState } from 'react';
import { connect } from 'react-redux';

import Personal from "./Personal"
import Contact from "./Contact"
import Success from "./Success"
import Confirmation from "./Confirmation"

import { putChefs } from '../../../actions';


const Onboarding = (props) => {
    const [adjust, setAdjust] = useState({ steps: 1 })
    const [chef, setChef] = useState({})

    switch (chef.steps) {
        case 1:
            console.log('Case One Activated', chef.steps)
            return (
                <Personal state={adjust} setState={setAdjust} />
            );
        case 2:
            console.log('Case Two Activated', chef.steps)
            return (
                <Contact state={adjust} setState={setAdjust} />
            )
        case 3:
            console.log('Case Three Activated', chef.steps)
            return (
                <Confirmation state={adjust} setState={setAdjust} />
            )
        case 4:
            console.log('Case Four Activated', chef.steps)
            return (
                <Confirmation state={adjust} setState={setAdjust} />
            )
        default:
            console.log('You are in Default and shouldnt be')
            return (<div>SOMETHING IS WRONG</div>);
    }
}

const mapStateToProps = state => {
    return {
        chef: state.chef
    }
}

export default connect(mapStateToProps, { putChefs })(Onboarding)



/**    switch (action.type) {
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
    } */