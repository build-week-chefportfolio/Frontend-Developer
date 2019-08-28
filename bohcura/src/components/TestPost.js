import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import axios from 'axios'

const TestPost = props => {

    const item =
    {
        id: 1,
        FirstNameLastName: 'TESTY TEST',
        yearsexp: 10,
        relocate: true,
        location: 'Las',
        state: 'Nevada',
        contactpref: 'email',
        telephone: '627-5309',
        email: '200mk@example',
        public: true,
        users_id: 1,
        recipe: [{
            "id": 1,
            RecipeName: "Taco Tuesday",
            prepTime: "30",
            description: "blabla"
        }]
    }


    useEffect(() => {

        console.log('UseEffect is running?')
        axios
            .post('https://chefportfolioo.herokuapp.com/api/chefs', item) //Need to update this API call when I get the full path
            .then(res => {
                console.log('This is the Chef Data POST', res);
            })
            .catch(err => {
                console.log('CHEFS NOT CONNECTING', err.response)
            });
    }, [])

    return (
        <div>
            <h1>Check Console for Data Check{console.log('This is the Data')}</h1>
        </div>
    )
}

const mapStateToProps = state => {
    return {

    }
}

export default connect(mapStateToProps, {})(TestPost) 