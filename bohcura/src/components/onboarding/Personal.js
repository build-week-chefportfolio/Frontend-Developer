// Firstname, Lastname, Years of Experience, Location (City, State), Willing to travel (Select)
// Lisa

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import Select from 'react-select';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';



const xpOptions = [
  { value: '0 - 5', label: '0-5'},
  { value: '6 - 10', label: '6-10'},
  { value: '11 - 15', label: '11-15'},
  { value: '16+', label: '16+'}
];



const Personal = ({ props }) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    if (status) {
      setUser(user => [...user, status])
    }
  }, [status]);


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
    {/*<select*/}
    {/*  name="yearsXp"*/}
    {/*  value={values.yearsXp}*/}
    {/*  onChange={handleChange}*/}
    {/*  onBlur={handleBlur}*/}
    {/*  style={{ display: 'block' }}*/}
    {/*>*/}
    {/*  <option value="0 - 5" />*/}
    {/*  <option value="6 - 10" />*/}
    {/*  <option value="10 - 15"  />*/}
    {/*  <option value="16+" />*/}
    {/*</select>*/}
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
      <select
        name="relocate"
        value={values.relocate}
        onChange={handleChange}
        onBlur={handleBlur}
        style={{ display: 'block' }}
      >
        <option value="currently open"  label="currently open"/>
        <option value="not available"  label="not available"/>
      </select>
      {errors.relocate && touched.relocate && <p>{errors.relocate}</p>}
    </div>

    <button type='submit' disabled={isSubmitting}>Submit!</button>
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
      yearsXP: yearsXP || '',
      locationCity: locationCity || '',
      locationState: locationState || '',
      relocate: yearsXP || ''
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

  handleSubmit(values, { setStatus, resetForm, setSubmitting }) {

    // axios
    //   .post(`http://localhost:5000/api/register/`, values)
    //   .then(res => {
    //     console.log(res.data);
    //     setStatus(res.data);
    //     // had to move resetForm to the get
    //     // resetForm();
    //     setSubmitting(false);
    //   })
    //   .catch(err =>  {
    //     console.log("Registration error: ", err);
    //     setSubmitting(false);
    //   });
    // axios
    //   .get(`http://localhost:5000/api/restricted/data`, values)
    //   .then(res => {
    //     console.log(res.data);
    //     setStatus(res.data);
    //     resetForm();
    //   })

  }


})(Personal);

export default FormikForm;


