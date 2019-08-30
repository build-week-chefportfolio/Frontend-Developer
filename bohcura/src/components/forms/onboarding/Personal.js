import React from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

import styled from 'styled-components';

const Title = styled.div`
    display: flex;
    padding: 1.6rem 0;
`;

const Div = styled.div`
    display: block;
    width: 80%;
    margin-left: 10%;
    text-align: left;
    alignment-baseline: bottom;
    padding: 5%;
`;

const H1 = styled.h1`
    line-height: 3rem;
    text-align: left;
    font-family: 'Fahkwang', sans-serif;
    font-weight: bolder;
    font-size: 2.6rem;
`;

const H2 = styled.h2`
    font-size: 1.8rem;
    padding-right: 2rem;
    text-align: left;
    font-family: 'Fahkwang', sans-serif;
    
    
`;

const H3 = styled.h3`
    font-family: 'Lato', sans-serif;
    font-size: 1.3rem;
   
`;

const H5 = styled.h5`
    border-left: 2px solid gray;
    line-height: 1.6rem;
    padding-left: 1rem;
    text-align: left;
    font-family: 'Libre Franklin', sans-serif;
`;

const Center = styled.div`
    display: flex;
    margin: auto;
    text-align: center;
    padding: 1rem;
`;

const Paragraph = styled.div`
    line-height: 3rem;
    font-size: 1.2rem;
    font-family: 'Libre Franklin', sans-serif;
    padding: 2rem 0;
`;



const Personal = props => {
  const {
    values,
    touched,
    errors,
    handleChange,
  } = props;

  return (
    <Div>
      <div className="reg-form">
        <H1>Welcome to bohcura! Let's create your <br />professional profile real quick..</H1>
        <br />
        <H3>Tell us a little bit about you and how you'd like clients to reach you.</H3>
        <br />
        <Title>
          <H2 className='rightBorder'>Step 1 of 2 <br /> About You</H2> <br />
          <H5>TIP: User your TAB key to move quickly<br />through the fields. SHIFT+TAB moves<br />you backwards.
          </H5><br />
        </Title>
        <Paragraph>
          <Form>
            Hi. My name is {' '}
            <Field type="text" className="styledInput" name="firstName" placeholder="first name" style={{ marginRight: '1rem' }} />
            {touched.firstName && errors.firstName && <p>{errors.firstName}</p>} {' '}
            <Field type="text" className="styledInput" name="lastName" placeholder="last name" />
            {touched.lastName && errors.lastName && <p>{errors.lastName}</p>}, <br />
            and I've been cooking professionally for

            <Field type="number" className="styledInput" name="yearsexp" placeholder="0" style={{ width: '4rem' }} />
            {errors.yearsexp && touched.yearsexp && <p>{errors.yearsexp}</p>} years(s). <br />

            I'm located in <Field type="text" className="styledInput" name="city" placeholder="city" />
            {touched.city && errors.city && <p>{errors.city}</p>}, <Field type="text" className="styledInput" name="state" placeholder="state" />
            {touched.state && errors.state && <p>{errors.state}</p>}, and I'm <br />

            <select name="relocate" value={values.relocate} onChange={handleChange} >
              <option value="Pick A Field" label="Pick A Field" />
              <option value="not available" label="not available" />
              <option value="currently open" label="currently open" />
            </select>


            {errors.relocate && touched.relocate && <p>{errors.relocate}</p>} to considering to travel for culinary engagements.
            <Center>
              <button type='submit'>Next: Step 2 - Your Contact Preferences</button>
            </Center>

            {/*<button type='submit' disabled={isSubmitting}>Submit!</button>*/}
          </Form>
        </Paragraph>
      </div>
    </Div>
  );
};


const FormikForm = withFormik({
  mapPropsToValues({ firstName, lastName, yearsexp, city, state, relocate }) {
    return {
      firstName: firstName || '',
      lastName: lastName || '',
      yearsexp: yearsexp || '',
      city: city || '',
      state: state || '',
      relocate: relocate || ''
    }
  },

  validationSchema: Yup.object().shape({
    firstName: Yup.string()
      .min(1, 'First name must be 1 characters or longer')
      .required('First name is required'),
    lastName: Yup.string()
      .min(1, 'Last name must be 1 characters or longer')
      .required('Last name is required'),
    // yrsExperience: Yup.
    city: Yup.string()
      .min(4, 'City name must be 4 characters or longer')
      .required('City is required'),
    state: Yup.string()
      .min(1, 'State must be 4 characters or longer')
      .required('State is required'),
    // relocate:
  }),

  handleSubmit(values, { props, setSubmitting }) {
    console.log("this is values", values)
    props.setChef(values)
    props.setState({ steps: 2 })
  }
})(Personal);

export default FormikForm;