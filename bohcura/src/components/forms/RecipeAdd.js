import React, { useState } from 'react';
import { postRecipes } from "../../actions";
import { withFormik, Form, Field, FieldArray, ErrorMessage } from "formik";
import * as Yup from 'yup';
import styled from 'styled-components';
import { connect } from 'react-redux';

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

const RecipeAdd = ({ values, isDisabled, errors, touched, toggle }) => {
  console.log(errors);
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
    <div className='form-add-recipe'>
      <Form>
        <div className='required-fields'>
          <h3>Required</h3>
          <div className='fields'>
            <div><Field type='text' name='RecipeName' placeholder='Name' /></div>
            {touched.RecipeName && errors.RecipeName && <p>{errors.RecipeName}</p>}
            <div><Field type='text' name='description' placeholder='Description (At least 10 characters)' /></div>
            <div><Field type='text' name='prepTime' placeholder='Prep Time' /></div>
            <div><Field type='text' name='cookTime' placeholder='Cook Time' /></div>
            <div>Course: <Field type='number' name='course' placeholder={0} /></div>
            <div>Serves: <Field type='number' name='serves' placeholder={0} /></div>

          </div>
        </div>
        <div className='optional-fields'>
          <h4>Optional</h4>
          <div className='fields'>
            {/* Ingredients and Preparation will use FieldArrays */}
          </div>
        </div>
        <button type='submit' onClick={() => console.log('Clicked')}>Add Recipe</button>
        <button onClick={toggle}>Cancel</button>
      </Form>
    </div>
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

  }),
  handleSubmit(values, { props, isSubmitting, setErrors }) {
    console.log('Values: ', values);
    let recipeFinal = {
      RecipeName: values.RecipeName,
      description: values.description,
      course: +values.course,
      prepTime: values.prepTime,
      cookTime: values.cookTime,
      serves: +values.serves,
    };
    if(values.hasOwnProperty('ingredients')) recipeFinal.ingredients = values.ingredients;
    if(values.hasOwnProperty('preparation')) recipeFinal.preparation = values.preparation;
    props.postRecipes(recipeFinal);
  }
})(RecipeAdd);

const mapStateToProps = state => state;

export default connect(mapStateToProps, { postRecipes })(FormikRecipe);