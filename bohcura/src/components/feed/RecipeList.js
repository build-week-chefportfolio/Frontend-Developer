import React, { useEffect } from 'react';
import RecipeCard from './RecipeCard';
import { getRecipes } from "../../store/actions";
import { connect } from 'react-redux';
import styled from 'styled-components';

const RecipePage = styled.div`
  padding: 20px 0;
  box-sizing: border-box;
  
  div.right-content {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

const ListDiv = styled.div`
  display: flex;
  margin: 40px auto;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 70%;
`;

// Use Redux Store action to make request
const DEV_MODE = 0; // When enabled, initialRecipes will be mapped to props in connect
const initialRecipes = [
  {
    id: 0,
    RecipeName: 'Salad',
    course: 1,
    image: '../../assets/mock-images/Salmon-Cobb-Salad.jpg',
    description: 'If it ain’t broke, don’t fix it, and that’s how I feel about the cobb salad, at least to a point ;)  The original cobb salad recipe was introduced the 1930s at Hollywood’s Brown Derby restaurant, and quickly become an American classic.  The salad has hung around this long for a simple reason, it’s good!  I ‘m staying more or less faithful to the original today with one simple little variation ~ I’m swapping out the chicken for salmon, a pretty good trade if you ask me.  The rest is true to the original, even the dressing, which is simple but oozes old school restaurant charm.',
    chefFirstName: 'John',
    chefLastName: 'Hill',
    chefID: 0,
    prepTime: '20 Min.',
    cookTime: '30 Min.'
  },
  {
    id: 1,
    RecipeName: 'Pizza',
    course: 2,
    image: '../../assets/mock-images/Pizza-Easy.jpeg',
    description: 'Don\'t order spendy delivery -- just have some refrigerated pizza dough and topping ingredients on hand. In minutes, you\'ll have pizza the way you like it right from your own oven!',
    chefFirstName: 'Bill',
    chefLastName: 'Johnson',
    chefID: 1,
    prepTime: '20 Min.',
    cookTime: '30 Min.'
  }
];

const RecipeList = ({ storeRecipes: recipes, getRecipes }) => {
  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <div>
      <h1 className="proRecipes">Professional Recipes</h1>
      <RecipePage className='recipe-page'>
        <div className='right-content'>
          <ListDiv className='recipes-list'>
            {recipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />)}
          </ListDiv>
        </div>
      </RecipePage>
    </div>
  );

};

const mapStateToProps = state => {
  let recipesList = DEV_MODE ? initialRecipes : state.recipes;
  return {
    storeRecipes: recipesList
  };
};

export default connect(mapStateToProps, { getRecipes })(RecipeList);
