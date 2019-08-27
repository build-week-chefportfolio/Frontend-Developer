
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { reducer } from './reducers';
import './App.css';

<<<<<<< HEAD

// import Confirmation from "./components/onboarding/Confirmation";
import Signup from "./components/Signup";
// import Personal from "./components/onboarding/Personal";
// import SignIn from "./components/Signin";

=======
import Confirmation from "./components/forms/onboarding/Confirmation";
import Personal from "./components/forms/onboarding/Personal";
import Signup from "./components/Signup";
import SignIn from "./components/Signin";
import HomePage from "./components/HomePage";
import Nav from "./components/Nav";
import Onboarding from "./components/forms/onboarding/Onboarding";
import Feed from "./components/feed/Feed";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Recipe from "./components/Recipe";
import Personal from "./components/forms/onboarding/Personal";
import RecipesList from './components/feed/RecipeList';
>>>>>>> 276f62304c14cdcf856e1d832764ef26fa600942

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));



function App() {
  return (
    <div className="App">
<<<<<<< HEAD
<<<<<<< HEAD
      {/*    <SignIn />
=======
=======
      <Nav />
      <Route exact path="/" component={HomePage} />
      <Route path="/signup" component={Onboarding} />
      <Route path="/signin" component={SignIn} />
      <Route path="/feed" component={Feed} />
      <Route path="/profile/:id" component={Profile} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/recipe/:id" component={Recipe} />
>>>>>>> 276f62304c14cdcf856e1d832764ef26fa600942
      <Signup />
      <Personal />
>>>>>>> 2e3e28dcccfc683764e65819849f2ad97562bd35
      <Confirmation />
<<<<<<< HEAD
      
  <Personal /> */}
=======
      <RecipesList />
>>>>>>> 276f62304c14cdcf856e1d832764ef26fa600942
      <Signup />
    </div>
  )
}

const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);