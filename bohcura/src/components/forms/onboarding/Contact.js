// Firstname, Lastname, Years of Experience, Location (City, State), Willing to travel (Select)
// Lisa

import React from 'react';
import Select from 'react-select';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import mapStateToProps from "react-redux/es/connect/mapStateToProps";
import mapDispatchToProps from "react-redux/es/connect/mapDispatchToProps"
import { postChefs } from '../../../actions';

import styled from 'styled-components';
import ChefCard from '../../feed/ChefCard';

const Title = styled.div`
    display: flex;
 
`;

const Div = styled.div`
    display: block;
    width: 80%;
    margin-left: 10%;
    text-align: left;
    alignment-baseline: bottom;
    padding: 5%;
`;

const Row = styled.div`
    display: flex;
    justify-content: space-between;
    //margin: 1.6rem;
    align-content: baseline;
`;
const H1 = styled.h1`
    text-align: left;
    //font-family: 'Raleway', sans-serif;
    //font-weight: 600;
    // color: #4d4d4d;
    //font-size: 2.2em;
`;
const H2 = styled.h2`
    font-size: 1.8rem;
    padding-right: 2rem;
    text-align: left;
`;
const H5 = styled.h5`
    border-left: 2px solid gray;
    line-height: 1.6rem;
    padding-left: 1rem;
    text-align: left;
`;

const Center = styled.div`
    display: flex;
    margin: auto;
    text-align: center;
`;

const Input = styled.input`
    width: 16%;
    margin-right: 1rem;
    height: 1rem;
    border: 0;
    outline: 0;
    background: transparent;
    border-bottom: 1px solid #c4c4c4;
    text-align: center;
`;

const Paragraph = styled.div`
    line-height: 3rem;
    font-size: 1.2rem;
`;

const customSelect = styled.select`
      &.Select.is-open > .Select-control .Select-arrow {
    border-color: transparent transparent red;
`;

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: '1px dotted pink',
    color: state.isSelected ? 'red' : 'blue',
    padding: 20,
    width: 200
  }),
  control: () => ({
    // none of react-select's styles are passed to <Control />
    width: 200,
  }),
  valueContainer: (provided) => ({
    ...provided,
    minHeight: '1px',
    height: '40px',
    paddingTop: '0',
    paddingBottom: '0',
    width: 300
  }),
};



// set options for react-select

const relocateOptions = [
  { value: 'currently open', label: 'currently open' },
  { value: 'not available', label: 'not available' }
];


const Contact = props => {
  const {
    values,
    touched,
    errors,
    dirty,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
  } = props;

  return (
    <Div>
      <div className="reg-form">
        <H1>Welcome to bohcura! Let's create your <br />professional profile real quick..</H1>
        <h3>Tell us a little bit about you and how you'd like clients to reach you.</h3>
        <Title>
          <H2 className='rightBorder'>Step 2 of 2 <br /> About You</H2>
          <H5>TIP: User your TAB key to move quickly<br />through the fields. SHIFT+TAB moves<br />you backwards.
          </H5>
        </Title>
        <Paragraph>
          <Form>
            I can be reached by {' '}
            <select name="contactpref" value={values.contactpref} onChange={handleChange} >
              <option value="email or phone" label="email or phone" />
              <option value="email" label="email" />
              <option value="phone" label="phone" />
            </select>
            . My email address is
            <Field type="text" name="email" placeholder="you@there.com" /><br />
            , and my phone number is I'm located in <Field type="text" name="telephone" placeholder="(555) 555-555" />.<br />
            <select name="publicBool" value={values.publicBool} onChange={handleChange} >
              <option value="Please display" label="Please display" />
              <option value="Don't display" label="Don't display" />
            </select>
            {errors.relocate && touched.relocate && <p>{errors.relocate}</p>} this info publicly.
            <Center>
              <button type='submit'>Submit!</button>
            </Center>
          </Form>
        </Paragraph>
      </div>
    </Div>
  );
};


const FormikForm = withFormik({
  mapPropsToValues({ contactpref, email, telephone, publicBool }) {
    return {
      contactpref: contactpref || '',
      email: email || '',
      telephone: telephone || '',
      public: publicBool || ''
    }
  },

  validationSchema: Yup.object().shape({

  }),

  handleSubmit(values, { props, setSubmitting }) {
    console.log("this is values", values)
    console.log("this is CHEFFFF", props.chef)

    props.setChef({
      ...props.chef,
      email: values.email,
      contactpref: values.contactpref,
      telephone: values.telephone,
      public: values.public
    })
    props.setState({ steps: 3 })
  }
})(Contact);

export default FormikForm;