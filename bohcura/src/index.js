
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { reducer } from './reducers';
import './App.css';
import SignUp from "./components/Signup";


import Confirmation from "./components/forms/onboarding/Confirmation";
import Personal from "./components/forms/onboarding/Personal";
import Signup from "./components/Signup";
import HomePage from "./components/HomePage";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));


function App() {
  return (
    <div className="App">
      <HomePage />
      <Signup />
      <Personal />
      <Confirmation />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement

);



