/* Signup Form and Signup confirmation page */
// Form with username, password, password verification
// Signin ? Verify with UX
// Ryan Does Signup
//
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { withFormik, Form, Field } from "formik";
import * as yup from "yup";
import { connect } from "react-redux";

import '../App.css';

function SignUpMod ({ errors, touched, status}) {
    const [user, setUser] = useState([]);
    useEffect(() => {
        if (status) {
          setUser([...user, status]);
        }
      }, [status]);
    return(
        <div className="signUpContainer">
            <h1>Bohcura: The personal brand platform for personal chefs.</h1>
            <div className="signUpBottom">
                <p className="signUpText">Hi, Chef. You're just a click away from creating a profile on the platform purpose-built to showcase you in the best professional light and help you connect with clients.</p>
                <Form className="signUpForm">
                    <Field key="email" type="text" name="email" placeholder="    Email" className="signUpEmail"></Field>
                    {touched.email && errors.email && <p>{errors.email}</p>}
                    <Field key="password" type="password" name="password" placeholder="    Password" className="signUpPassword"></Field>
                    {touched.password && errors.password && <p>{errors.password}</p>}
                    <Field key="confirmPassword" type="password" name="confirmPassword" placeholder="    Re-Type Password" className="signUpConfirmPassword"></Field>
                    {touched.password && errors.password && <p>{errors.password}</p>}
                    <button type="submit" className="signUpButton">Sign Up Now</button>
                </Form>
            </div>
        </div>
    )
}
const formikHOC = withFormik({
    mapPropsToValues({email, password, confirmPassword}) {
        return {
            email: email || "",
            password: password || "",
            confirmPassword: confirmPassword || ""
        };
    },
    validationSchema: yup.object().shape({
        email: yup.string()
            .email("Email not valid")
            .required("Email is required"),
        password: yup.string()
            .min(6, "Password must be 6 characters or longer")
            .required("Password is required"),
        confirmPassword: yup.string()
            .oneOf([yup.ref('password'), null], 'Passwords must match')
            .required("Password is required")
    }),
    handleSubmit(values, {setStatus}) {
        axios.post('https://reqres.in/api/users/', values)
        .then(response => {
            console.log(response.data);
            setStatus(response.data);
        });
    }
})(SignUpMod);

export default formikHOC