import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getRecipe } from "../actions";

function Recipe ({ recipe, getRecipe, match: { params: { id }} }) {

    useEffect(() => {
        getRecipe(id);
    }, []);
    if(!recipe.hasOwnProperty('name')) return <div>Loading...</div>;

    return (
        <div className='recipe-page'>
            Hello Recipe
        </div>
    )
}

const mapStateToProps = state => {
    return {
        recipe: state.recipe
    };
};

export default connect(mapStateToProps, { getRecipe })(Recipe);