
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { reducer } from './reducers';
import './App.css';


// import Confirmation from "./components/onboarding/Confirmation";
import Signup from "./components/Signup";
// import Personal from "./components/onboarding/Personal";
// import SignIn from "./components/Signin";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));



function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      {/*    <SignIn />
=======
      <Signup />
      <Personal />
>>>>>>> 2e3e28dcccfc683764e65819849f2ad97562bd35
      <Confirmation />
      
  <Personal /> */}
      <Signup />
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