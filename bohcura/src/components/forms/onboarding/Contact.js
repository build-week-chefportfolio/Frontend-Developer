// Can be reached by (email and phone, email, or just phone)(Select Box)
// Email Address to be reached at
// Phone Number
// Public or Private (Contact Info)

// Stretch - Picture / File Upload
// Chris Hernandez

import React, { useState, useEffect } from "react";
import axios from 'axios'
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import { NavLink } from "react-router-dom"

const Contact = ({ errors, touched, status }) => {


  return (
    <div className="personal-form">
      <h1>Contact</h1>
      <Form>

        <div className="contactForm">
          <Field className="contact-field" type="text" name="name" placeholder="Name" />
          {touched.name && errors.name && (
            <p className="error">{errors.name}</p>
          )}

          <Field className="contact-field" type="text" name="email" placeholder="Email" />
          {touched.email && errors.email && <p className="error">{errors.email}</p>}

          <Field className="contact-field contact-message" type="text" name="message" placeholder="Message" />
          {touched.message && errors.message && <p className="error">{errors.Message}</p>}

          <button className="contact-field" type="submit">Submit</button>
        </div>

      </Form>
    </div>
  );
};

const contactPage = withFormik({
  mapPropsToValues({ name, email, message }) {
    return {
      name: name || "",
      email: email || "",
      message: message || "",
    };
  },

  validationSchema: Yup.object().shape({
    name: Yup.string().required("Please provide your name"),
    email: Yup.string().required("Please provide an email"),
    message: Yup.string().required("Please type your message")
  }),

  handleSubmit(values, { props, setStatus }) {
    props.setState({ steps: 3 })
    console.log('Checks to see if the state was updated to 2', props.state)
  }
})(Contact);

export default contactPage;
