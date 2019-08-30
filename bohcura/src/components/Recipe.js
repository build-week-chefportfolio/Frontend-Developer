import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { getRecipe } from "../store/actions";
import styled from "styled-components";
import PizzaImage from '../assets/mock-images/Pizza-Easy.jpeg';

const devRecipe = {
    image: PizzaImage,
    RecipeName: 'Pizza',
    course: 2,
    chefFirstName: 'Bill',
    chefLastName: 'Hill',
    chefID: 1,
    prepTime: '20 Min.',
    cookTime: '30 Min.',
    serves: 4,
    description: 'Don\'t order spendy delivery -- just have some refrigerated pizza dough and topping ingredients on hand. In minutes, you\'ll have pizza the way you like it right from your own oven!',
    ingredients: ['Pizza Dough', 'Tomato Sauce', 'Cheese', 'Pepperoni', 'Romano'],
    preparation: ['Roll Dough', 'Place on Pizza Pan', 'Add Tomato Sauce', 'Add Cheese', 'Add Pepperoni', 'Bake on 350 for 20 Min.']
};

const DEV_MODE = 0;

const RecipeDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  div.recipe-header {
    
  }
  
  div.recipe-body {
    width: 80%;
    
    div.recipe-title {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid black;
    }
    
    div.details-short {
      display: flex;
      justify-content: space-between;
    }
    
    div.steps {
      display: flex;
      justify-content: space-evenly;
      
      div.ingredients, div.preparation {
        width: 45%;
        border: 1px solid gray;
        border-radius: 2px;
        padding: 5px;
        box-sizing: border-box;
        
        ul li {
          text-align: left;
        }
      }
    }
  }
`;

function Recipe({ recipe, getRecipe, match: { params: { id } } }) {
    console.log('Recipe: ', recipe);
    useEffect(() => {
        getRecipe(id);
    }, []);

    const convertCourse = course => {
        switch (course) {
            case 1: return 'First Course';
            case 2: return 'Second Course';
            case 3: return 'Third Course';
            case 4: return 'Fourth Course';
            case 5: return 'Fifth Course';
            default: return 'First Course';
        }
    };

    if (!recipe || !recipe.hasOwnProperty('RecipeName')) return <div>Loading...</div>;

    return (
        <RecipeDiv className='recipe-page'>
            <div className='recipe-header'>
                <div className='recipe-image'>
                    <img src={recipe.image} alt={`${recipe.RecipeName} recipe`} />
                </div>
            </div>
            <div className='recipe-body'>
                <div className='recipe-title'>
                    <div className='left-title'>
                        <h2>{recipe.RecipeName}</h2>
                        <h3>{convertCourse(recipe.course)}</h3>
                    </div>
                    <div className='right-title'>
                        <div className='icon-title'>
                            {/* Chef Icon goes here */}
                        </div>
                        <div className='name-title'>
                            {recipe.chefs && recipe.chefs.length ? (<Link to={`/chefs/${recipe.chefs[0].id}`}>
                                <h3>{}</h3>
                                <h3>{recipe.chefLastName}</h3>
                            </Link>) : null}
                        </div>
                    </div>
                </div>
                <div className='details-short'>
                    <span className='time-prep'>Prep Time: {recipe.prepTime}</span>
                    <span className='time-cook'>Cook Time: {recipe.cookTime}</span>
                    <span className='yield'>Yield: Serves {recipe.serves}</span>
                </div>
                <div className='description'>
                    <h2>About This Recipe</h2>
                    <div className='description-text'>
                        {recipe.description}
                    </div>
                </div>
                <div className='steps'>
                    <div className='ingredients'>
                        <h2 className='table-head'>Ingredients</h2>
                        <ul>
                            {Array.isArray(recipe.ingredients) && recipe.ingredients.map(i => <li>{i}</li>)}
                        </ul>
                    </div>
                    <div className='preparation'>
                        <h2 className='table-head'>Preparation</h2>
                        <ul>
                            {Array.isArray(recipe.preparation) && recipe.preparation.map(p => <li>{p}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </RecipeDiv>
    )
}

const mapStateToProps = state => {
    let recipeObject = DEV_MODE ? devRecipe : state.recipe;
    return {
        recipe: recipeObject
    };
};

export default connect(mapStateToProps, { getRecipe })(Recipe);