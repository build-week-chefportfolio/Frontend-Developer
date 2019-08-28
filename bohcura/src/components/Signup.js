/* Signup Form and Signup confirmation page */
// Form with username, password, password verification
// Signin ? Verify with UX
// Ryan Does Signup
//
import React from 'react';
import { withFormik, Form, Field } from "formik";
import * as yup from "yup";

import { axiosWithAuth } from '../utilities/axiosWithAuth'

import '../App.css';

function SignUpMod({ errors, touched, status }) {

    return (
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
    mapPropsToValues({ email, password, confirmPassword }) {
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
    handleSubmit(values, { setStatus }) {
        const loginInfo = {
            'username': values.email,
            'password': values.password
        }

        axiosWithAuth()
            .post('https://chefportfolioo.herokuapp.com/api/auth/register', loginInfo)
            .then(res => {
                localStorage.setItem('token', res.data.password)
                //Need to capture the user_ID and store into local storage to be referenced from when the the chef profile is pulled
            })
            .catch(err => {
                console.log('SignUp Failed', err)
            })
    }
})(SignUpMod);

export default formikHOC