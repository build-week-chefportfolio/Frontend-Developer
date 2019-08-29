import React, { useState } from 'react';
import { postRecipes } from "../../actions";
import { withFormik, Form, Field, FieldArray, ErrorMessage } from "formik";
import * as Yup from 'yup';
import styled from 'styled-components';

const RecipeDiv = styled.div`
  width: 80%;
  
  div.required-fields {
    div.fields {
      display: flex;
      flex-direction: column;
      
    }
  }
  div.optional-fields {
    div.fields {
      display: flex;
      flex-direction: column;
    }
  }
`;

const RecipeAdd = ({ values, isDisabled }) => {

  const [inputs, setInputs] = useState({
    RecipeName: values.RecipeName || '',
    course: values.course || 0,
    prepTime: values.prepTime || '',
    cookTime: values.cookTime || '',
    serves: values.serves || 0,
    description: values.description || '',
    ingredients: values.ingredients || [],
    preparation: values.preparation || []
  });

  const handleChange = e => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  return (
    <RecipeDiv className='form-add-recipe'>
      <Form>
        <div className='required-fields'>
          <h3>Required</h3>
          <div className='fields'>
            <div><Field type='text' name='RecipeName' placeholder='Name' value={inputs.RecipeName} onChange={handleChange} /></div>
            <div><Field type='text' name='description' placeholder='Description (At least 10 characters)' value={inputs.description} onChange={handleChange} /></div>
            <div><Field type='text' name='prepTime' placeholder='Prep Time' value={inputs.prepTime} onChange={handleChange} /></div>
            <div><Field type='text' name='cookTime' placeholder='Cook Time' value={inputs.cookTime} onChange={handleChange} /></div>
            <div>Course: <Field type='number' name='course' placeholder={0} value={inputs.course} onChange={handleChange} /></div>
            <div>Serves: <Field type='number' name='serves' placeholder={0} value={inputs.serves} onChange={handleChange} /></div>
          </div>
        </div>
        <div className='optional-fields'>
          <h4>Optional</h4>
          <div className='fields'>
            {/* Ingredients and Preparation will use FieldArrays */}
            <button type='button' disabled={isDisabled}>Add Recipe</button>
          </div>
        </div>
      </Form>
    </RecipeDiv>
  );
};

const FormikRecipe = withFormik({
  mapPropsToValues({ RecipeName, course, prepTime, cookTime, serves, description, ingredients, preparation }) {
    return {
      RecipeName: RecipeName || '',
      course: course || 1,
      prepTime: prepTime || '',
      cookTime: cookTime || '',
      serves: serves || 1,
      description: description || '',
      ingredients: ingredients || [],
      preparation: preparation || []
    };
  },
  validationSchema: Yup.object().shape({
    RecipeName: Yup.string()
      .min(4, 'Name must be at least 4 characters in length.')
      .required('You must enter a Recipe name.'),
    course: Yup.number()
      .required('You must enter a course number.'),
    prepTime: Yup.string()
      .min(2, 'Preparation time must be at least 2 characters in length.')
      .required('You must enter a preparation time.'),
    cookTime: Yup.string()
      .min(2, 'Cook time must be at least 2 characters in length.')
      .required('You must enter a cook time.'),
    serves: Yup.number()
      .required('You must specify how many people the dish serves.'),
    description: Yup.string()
      .min(10, 'You must enter at least 10 characters for the description.')
      .required('You must enter a description.'),
    ingredients: Yup.array(),
    preparation: Yup.array()
  }),
  handleSubmit(values, { props, isSubmitting }) {
    console.log('Values: ', values);
    let recipeFinal = {
      RecipeName: values.RecipeName,
      description: values.description,
      course: values.course,
      prepTime: values.prepTime,
      cookTime: values.cookTime,
      serves: values.serves,
    };
    if(values.hasOwnProperty('ingredients')) recipeFinal.ingredients = values.ingredients;
    if(values.hasOwnProperty('preparation')) recipeFinal.preparation = values.preparation;
    postRecipes(recipeFinal);
  }
})(RecipeAdd);

export default FormikRecipe;