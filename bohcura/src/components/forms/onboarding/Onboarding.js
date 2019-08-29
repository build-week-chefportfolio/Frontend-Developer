import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

import Personal from "./Personal"
import Contact from "./Contact"
import Confirmation from "./Confirmation"

import { putChefs, postChef } from '../../../actions';


const Onboarding = (props) => {
    const [adjust, setAdjust] = useState({ steps: 1 })
    const [chef, setChef] = useState({})

    switch (adjust.steps) {
        case 1:
            console.log('Case One Activated', adjust.steps)
            return (
                <Personal setState={setAdjust} setChef={setChef} chef={chef} />
            );
        case 2:
            console.log('Case Two Activated', adjust.steps)
            console.log('Object from Personal', chef)
            return (
                <Contact setState={setAdjust} setChef={setChef} chef={chef} />
            )
        case 3:
            console.log('Case Three Activated', adjust.steps)
            return (
                <Confirmation setState={setAdjust} chef={chef} setChef={setChef} />
            )
        case 4:
            // post the chef
            console.log('Case Four Activated', adjust.steps);
            props.postChef(chef);
            return (<div>{(!adjust.steps === 4) ? <div>Redirecting...</div> : props.history.push("/dashboard")}</div>)
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

export default withRouter(connect(mapStateToProps, { putChefs, postChef })(Onboarding))



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