import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import axios from 'axios'

import {getChefs} from '../actions'

const TestPost = props => {

    const item =
    {
        FirstNameLastName: 'TESTY TEST',
        yearsexp: 10,
        relocate: true,
        location: 'Las',
        state: 'Nevada',
        contactpref: 'email',
        telephone: '627-5309',
        email: '200mk@example',
        public: true,
        users_id: 1
    }


    useEffect(() => {

        // console.log('UseEffect is running?')
        // axios
        //     .post('https://chefportfolioo.herokuapp.com/api/chefs/add', item) //Need to update this API call when I get the full path
        //     .then(res => {
        //         console.log('This is the Chef Data POST', res);
        //     })
        //     .catch(err => {
        //         console.log('CHEFS NOT CONNECTING', err.response)
        //     });

        //   console.log('UseEffect is running?')

        axios
            .get('https://chefportfolioo.herokuapp.com/api/recipe/1') //Need to update this API call when I get the full path
            .then(res => {
                console.log('This is the Recipe Data POST', res);
            })
            .catch(err => {
                console.log('CHEFS NOT CONNECTING', err.response)
            });
        getChefs()

    }, [])

    return (
        <div>
            <h1>Check Console for Data Check{console.log('This is the Data', props.chefs)}</h1>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        chefs: state.chefs
    }
}

export default connect(mapStateToProps, {getChefs})(TestPost) 