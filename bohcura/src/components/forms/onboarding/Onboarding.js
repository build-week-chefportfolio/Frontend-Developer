import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

import Personal from "./Personal"
import Contact from "./Contact"
import Confirmation from "./Confirmation"

import { putChefs, postChef } from '../../../store/actions';

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
            (async (postChef, chef, props) => {
                await postChef(chef);
                props.history.push('/dashboard');
            })(props.postChef, chef, props);
            return (<div>Redirecting...</div>);
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