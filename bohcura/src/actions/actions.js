import axios from 'axios';

export const FETCH_SETS_DATA_START = 'FETCH_SETS_DATA_START';
export const FETCH_SETS_DATA_SUCCESS = 'FETCH_SETS_DATA_SUCCESS';
export const FETCH_SETS_DATA_FAILURE = 'FETCH_SETS_DATA_FAILURE';

export const getData = () => {
    return dispatch => {
        dispatch({ type: FETCH_SETS_DATA_START });
        axios
            .get('')
            .then(res => {
                // res.data.data
                console.log(res);
                dispatch({ type: FETCH_SETS_DATA_SUCCESS, payload: res.data.sets });
            })
            .catch(err => {
                dispatch({ type: FETCH_SETS_DATA_FAILURE, payload: err.response });
            });
    };
};


/*
    .get
    to fetch

    .post
    is to add new?

    .put
    is to update?

    .delete
    to remove
*/