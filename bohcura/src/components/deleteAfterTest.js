import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import axios from 'axios'
import {  } from '../actions';

const TestActions = props => {





    useEffect(() => {
        // props.getSets()

            axios
                .get('https://chefportfolioo.herokuapp.com/api/chefs') //Need to update this API call when I get the full path
                .then(res => {
                console.log('This is the Chef Data',res);
            })
            .catch(err => {
                console.log('CHEFS NOT CONNECTING', err.response)
            });


            axios
            .get('https://chefportfolioo.herokuapp.com/api/recipe') //Need to update this API call when I get the full path
            .then(res => {
            console.log('This is the RECIPES Data',res);
        })
        .catch(err => {
            console.log('RECIPES NOT CONNECTING', err.response)
        });
    }, [])

    return (
        <div>
            <h1>Check Console for Data Check{console.log('This is the Data', )}</h1>
        </div>
    )
}

const mapStateToProps = state => {
    return {

    }
}

export default connect(mapStateToProps, {})(TestActions)