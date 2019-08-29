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

const Row = styled.div`
    display: flex;
    justify-content: space-between;
    //margin: 1.6rem;
    align-content: baseline;
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

const H4 = styled.h4`
    font-family: 'Lato', sans-serif
`;

const H5 = styled.h5`
    border-left: 2px solid gray;
    line-height: 1.6rem;
    padding-left: 1rem;
    text-align: left;
    font-family: 'Libre Franklin', sans-serif;
`;

const H6 = styled.div`
    line-height: 3rem;
    font-size: 1.2rem;
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
        <H1>Great, Chef Jane! <br /> Now, clients can reach you.. </H1>
        <br />
        <H3>You can choose whether or not to publicly share this info.</H3>
      <br />
        <Title>
          <H2 className='rightBorder'>Step 2 of 2 <br /> Contact Info</H2>
          <H5>TIP: If you choose not to publicly display this info, we'll<br />only use it to send you important info. Clients can use<br />your personal contact for to connect with you.
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
            .{" "} My email address is
            <Field type="text" className="styledInput" name="email" placeholder="you@there.com" />,<br />
            {" "} and my phone number is <Field type="text" className="styledInput" name="telephone" placeholder="(555) 555-555" />.<br />
            <select name="publicBool" value={values.publicBool} onChange={handleChange} >
              <option value="Please display" label="Please display" />
              <option value="Don't display" label="Don't display" />
            </select>
            {errors.relocate && touched.relocate && <p>{errors.relocate}</p>} this info publicly.

            <Center>
              <button type='submit'>Review my info</button>
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