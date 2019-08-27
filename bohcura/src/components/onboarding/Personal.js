// Firstname, Lastname, Years of Experience, Location (City, State), Willing to travel (Select)
// Lisa

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import Select from 'react-select';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import mapStateToProps from "react-redux/es/connect/mapStateToProps";
import mapDispatchToProps from "react-redux/es/connect/mapDispatchToProps"

import { postChefs } from '../../actions/postActions';



// set options for react-select
const xpOptions = [
  { value: '0 - 5', label: '0-5'},
  { value: '6 - 10', label: '6-10'},
  { value: '11 - 15', label: '11-15'},
  { value: '16+', label: '16+'}
];

const relocateOptions = [
  { value: 'currently open', label: 'currently open' } ,
  { value: 'not available',  label: 'not available' }
];


const Personal = ({ props }) => {

  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
  } = props;

  const [chef, postChef] = useState({
    firstName: '',
    lastName: '',
    yearsXp: '',
    city: '',
    state: '',
    relocate: ''
  });





  return (
    <div className="reg-form">
      <h1>Welcome to bohcura! Let's create your <br />professional profile real quick..</h1>
      <h3>Tell us a little bit about y ou and how you'd like clients to reach you.</h3>
      <Form>
        <div>
          <Field type="text" name="firstName" placeholder="first name" />
          {touched.firstName && errors.firstName && <p>{errors.firstName}</p>}
        </div>

        <div>
          <Field type="text" name="lastName" placeholder="last name" />
          {touched.lastName && errors.lastName && <p>{errors.lastName}</p>}
        </div>

        <div>
          <label htmlFor="yearsXp" style={{ display: 'block' }}>
            Years Experience
          </label>
          <Select options = {xpOptions} />
          {errors.yearsXP && touched.yearsXP && <p>{errors.yearsXp}</p>}
        </div>

        <div>
          <Field type="text" name="locationCity" placeholder="city" />
          {touched.locationCity && errors.locationCity && <p>{errors.firstName}</p>}
        </div>

        <div>
          <Field type="text" name="locationState" placeholder="state" />
          {touched.locationState && errors.locationState && <p>{errors.locationState}</p>}
        </div>

        <div>
          <label htmlFor="relocate" style={{ display: 'block' }}>
            Willing to Relocate
          </label>
          <Select options={relocateOptions} />
          {errors.relocate && touched.relocate && <p>{errors.relocate}</p>}
        </div>
        <button type='submit'>Submit!</button>
        {/*<button type='submit' disabled={isSubmitting}>Submit!</button>*/}
      </Form>

      ))}
    </div>
  );
};


const FormikForm = withFormik({
  mapPropsToValues({ firstName, lastName, yearsXp, locationCity, locationState, relocate }) {
    return {
      firstName: firstName || '',
      lastName: lastName || '',
      yearsXp: yearsXp || '',
      locationCity: locationCity || '',
      locationState: locationState || '',
      relocate: relocate || ''
    }
  },

  validationSchema: Yup.object().shape({

    firstName: Yup.string()
      .min(4, 'First name must be 4 characters or longer')
      .required('First name is required'),
    lastName: Yup.string()
      .min(4, 'Last name must be 4 characters or longer')
      .required('Last name is required'),
    // yrsExperience: Yup.
    locationCity: Yup.string()
      .min(4, 'City name must be 4 characters or longer')
      .required('City is required'),
    locationState: Yup.string()
      .min(4, 'State must be 4 characters or longer')
      .required('State is required'),
    // relocate:
  }),

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },



})(Personal);

export default FormikForm;

