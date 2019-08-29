// ChefCard / ProfileCard && Confirm
// Click on an item to edit
// ProfileCard is a make shift form that holds state from store, and can be edited
// 'Looks good Ship it!' / Submit button sends put request
// Chris York

import React, { useState } from 'react';
// we'll need context API to keep state between slides
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Select from 'react-select';
import Nav from '../../Nav';
import styled from 'styled-components';

import { NavLink } from "react-router-dom";

const phoneValidation = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

// We need an anonymous function instead of an arrow function so we keep our context
Yup.addMethod(Yup.string, 'phone', function () {
  return this.test('phone', 'Phone number is not valid', value => phoneValidation.test(value));
});

const relocateOptions = [
  { value: 'Currently open', label: 'Currently open' },
  { value: "Not available", label: "Not available" }
];

const PageDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  
  div.left-page {
    
    button.profile-submit {
      padding: 10px;
      border: 1px solid #2a9fd8;
      opacity: 0.54;
      border-radius: 5px;
      font-size: 1.2rem;
      color: #2cb4a6;
      margin: 10px;
      
      &:hover {
        opacity: 1;
      }
    }
    
    div.dialogue {
      
      div.dialogue-headers {
        color: #778895;
        text-align: left;
        
      }
      div.dialogue-review {
      display: flex;
      justify-content: space-evenly;
        
        div.confirm-header {
          padding: 5px;
          font-size: 2rem;
        }
      
        div.confirm-tip {
          border-left: 2px solid #c3cfda;
          padding: 5px;
          color: #778895;
          display: flex;
          align-items: center;
          
          span {
            
          }
        }
      }
    }
  }
  div.right-page {
    
    width: 36%;
    
    input {
      border: 0;
      margin-left: 5px;
    }
    
    hr.profile-hr {
      border: 1px solid #c3cfda;
      width: 88%;
    }
    
    h5.preview-note {
      width: 100%;
      font-size: 0.9rem;
    }
  
    div.form-body {
      display: flex;
      flex-direction: column;
      align-items: center;
      border: 1px solid #c3cfda;
      border-radius: 2px;
      margin: 0 40px;
      
      div.profile-img {
        width: 100%;
        height: 150px;
        background: #dfe7ed;
      }
      div.title-name, div.info-container {
        padding: 10px 5px;
      }
      div.title-name {
        display: flex;
        
        div.title-icon {
          width: 20%;
        }
      }
    }
  }
`;


const ProfileForm = props => {
  // Get values from store for previous values
  let values = props.values; // The previous values passed through store
  const [inputs, setInputs] = useState({
    firstName: values.firstChild || '',
    lastName: values.lastName || '',
    yearsXP: values.yearsXP || 0,
    city: values.city || '',
    state: values.state || '',
    phone: values.phone || '',
    email: values.email || '',
    relocate: values.relocate || 'Currently open',
    contact: values.contact || 'both'
  });

  const selectChange = selectedOption => {
    setInputs({ ...inputs, relocate: selectedOption });
    console.log(selectedOption);
  };

  const setWidth = e => {
    let padding = e.target.type === 'number' ? 8 : 0;
    e.target.style.width = ((e.target.value.length + 1) * 8 + padding) + 'px';
  };

  const handleChange = e => {
    e.preventDefault();
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    setWidth(e);
  };

  return (
    <div className='ProfileForm'>
      <Form>
        <PageDiv>
          <div className='left-page'>
            <div className='dialogue'>
              <div className='dialogue-headers'>
                <h1 className='success-header'>
                  Awesome, Chef {inputs.firstName}!<br />
                  Here's how things look..
                </h1>
                <h4 className='success-subheader'>
                  You'll be able to add even more things once the basics are done.
                </h4>
              </div>
              <div className='dialogue-review'>
                <div className='confirm-header'>
                  Review and<br /> Confirm.
                </div>
                <div className='confirm-tip'>
                  <span>TIP: Click an item on the card to edit.</span>
                </div>
              </div>
            </div>
            <NavLink to="/"><button type='button' disabled={props.isSubmitting} className='profile-submit'>
              Looks good Ship it!
            </button></NavLink>
          </div>
          <div className='right-page'>
            <h5 className='preview-note'>Your Chef Card on the page of Chefs will look like this:</h5>
            <div className='form-body'>
              <div className='profile-img'>
                { /* Profile Image */}
              </div>
              <div className='title-name'>
                <div className='title-icon'>
                  {/* Insert Title Image */}
                </div>
                <div className='title-container'>
                  <div className='title-name'>
                    <span className='title'>Chef</span>
                    <Field type='text' name='firstName' placeholder={props.chef.firstName} onChange={handleChange} value={inputs.firstName} onLoad={setWidth} />
                    <Field type='text' name='lastName' placeholder='Lastname' onChange={handleChange} value={inputs.lastName} onLoad={setWidth} />
                  </div>
                  <div className='experience'>
                    <span className='experience-phrase'>
                      Professional cook for
                      <Field type='number' name='yearsXP' placeholder={0} onChange={handleChange} value={inputs.yearsXP} />
                      years
                    </span>
                  </div>
                </div>
              </div>
              <hr className='profile-hr' /> {/* For line after profile and title boxes */}
              <div className='info-container'>
                <div className='info-left'>
                  <div className='info-location'>
                    {/* Location Image */}
                    <div className='info-location-container'>
                      <Field type='text' name='city' placeholder='City' onChange={handleChange} value={inputs.city} />
                      <Field type='text' name='state' placeholder='State' onChange={handleChange} value={inputs.state} />
                    </div>
                  </div>
                  <div className='info-phone'>
                    {/* Phone Image */}
                    <Field type='text' name='phone' placeholder='888-888-8888' onChange={handleChange} value={inputs.phone} />
                  </div>
                  <div className='info-email'>
                    <Field type='email' name='email' placeholder='example@domain.com' onChange={handleChange} value={inputs.email} />
                  </div>
                </div>
                <div className='info-right'>
                  <div className='relocate-container'>
                    <Select name='relocate' value={inputs.relocate} options={relocateOptions} onChange={selectChange} />
                    <span className='relocate-phrase'>
                      to travel for culinary projects.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </PageDiv>
      </Form>
    </div>
  );
};

const FormikForm = withFormik({
  mapPropsToValues({ firstName, lastName, yearsXP, city, state, phone, email, relocate, contact }) {
    return {
      firstName: firstName || '',
      lastName: lastName || '',
      yearsXP: yearsXP || '',
      city: city || '',
      state: state || '',
      phone: phone || '',
      email: email || '',
      relocate: relocate || '',
      contact: contact || 'both'
    };
  },
  validationSchema: Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Name must be at least two characters in length')
      .required('You must enter a first name'),
    lastName: Yup.string()
      .min(2, 'Name must be at least two characters in length')
      .required('You must enter a last name'),
    yearsXP: Yup.string(),
    city: Yup.string()
      .required('You must enter a city'),
    state: Yup.string()
      .required('You must enter a state'),
    phone: Yup.string().phone()
      .required('You must enter a phone number'),
    email: Yup.string().email()
      .required('You must enter an email'),
    relocate: Yup.string(),
    contact: Yup.string(),
  }),
  handleSubmit(values, { resetForm, setErrors, setSubmitting, setStatus, props }) {
    console.log(values);
    let contact = values.hasOwnProperty('contact') ? values.contact : 'both';
    const profile = {
      firstName: values.firstName,
      lastName: values.lastName,
      yearsXP: values.yearsXP,
      city: values.city,
      state: values.state,
      phone: values.phone,
      email: values.email,
      relocate: values.relocate,
      contact: contact,
    };
    console.log(profile);
  }
})(ProfileForm);

export default FormikForm;


