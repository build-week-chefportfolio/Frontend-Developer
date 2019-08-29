import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import recipeIcon from '../../assets/icons/recipe.png';
import chefIcon from '../../assets/icons/chef.png';
import avatar from '../../assets/icons/avatar.png';

const DESC_LIMIT = 200; // the amount of characters a card will show before slicing the description

const RecipeDiv = styled.div`
  width: 26%;
  margin-bottom: 50px;
  
  div.recipe-image {
    max-width: 100%;
    width: 100%;
    height: 150px;
    background: #e0e0e0;
    overflow-y: hidden;
    
    img {
      max-width: 100%;
    }
  }
  
  div.recipe-body {
    display: flex;
    flex-direction: column;
    width: 100%;
    background: #f1f1f1;
    padding: 10px 20px;
    box-sizing: border-box;
    
    div.recipe-title {
      display: flex;
      border-bottom: 1px solid gray;
      
      div.recipe-icon {
          width: 20%;
          image {
            max-width: 100%;
            width: 100%;
          }
      }
      div.recipe-title-text {
        width: 79%;
        text-align: left;
        padding-left: 10px;
        box-sizing: border-box;
        
        p.recipe-name {
          font-weight: bold;
        }
      }
    }
    div.recipe-description {
      
      div.recipe-desc-links {
        display: flex;
        justify-content: space-between;
        div.prep-time {
          
        }
        div.cook-time {
          
        }
      }
      p.description-text {
        min-height: 75px;
        padding: 5px 0;
        text-align: left; 
      }
      div.details {
        display: flex;
        div.details-chef {
          width: 50%;
          display: flex;
          justify-content: space-evenly;
          div.chef-icon {
            width: 30%;
          }
          div.chef-names {
            width: 69%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            
            a {
              text-decoration: none;
              color: #282828;
            }
          }
        }
        div.recipe-link {
          width: 49%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          
          button {
            font-size: 1.1rem;
            padding: 10px;
            box-sizing: border-box;
            border-radius: 5px;
            background: #c4c4c4;
            width: 100%;
          }
        }
        
      }
    }
    
  }
`;

const RecipeCard = ({ recipe }) => {

  const sliceDesc = d => {
    if (typeof d === 'string' && d.length > DESC_LIMIT) return d.slice(0, DESC_LIMIT) + '...';
    return d;
  };

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

  return (
    <RecipeDiv className='recipe-card'>
      <Link to={`/recipes/${recipe.id}`}>
        <div className='recipe-image'>
          <img src={avatar} alt='Recipe' />
        </div>
      </Link>
      <div className='recipe-body'>
        <div className='recipe-title'>
          <div className='recipe-icon'>
            <img src={recipeIcon} alt={'recipe'} />
          </div>
          <div className='recipe-title-text'>
            <p className='recipe-name'>{recipe.RecipeName}</p>
            <p className='recipe-course'>{convertCourse(recipe.course)}</p>
          </div>
        </div>
        <div className='recipe-description'>
          <div className='recipe-desc-links'>
            <div className='prep-time'>
              <p>Prep Time: {recipe.prepTime}</p>
            </div>
            <div className='cook-time'>
              <p>Cook Time: {recipe.cookTime}</p>
            </div>
          </div>
          <p className='description-text'>{sliceDesc(recipe.description)}</p>
          {/* Slice the description and end it with an ellipsis */}
          <div className='details'>
            <div className='details-chef'>
              <div className='chef-icon'>
                <img src={chefIcon} alt='chef' />
              </div>
              <div className='chef-names'>
                <Link to={`/chefs/${recipe.chefID}`}>
                  <p className='first-name'>{recipe.chefFirstName || 'John'}</p>
                  <p className='last-name'>{recipe.chefLastName || 'Doe'}</p>
                </Link>
              </div>
            </div>
            <div className='recipe-link'>
              <Link to={`/recipe/${recipe.id}`}>
                <button type='button'>Get Recipe</button>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </RecipeDiv>
  );
};

export default RecipeCard;