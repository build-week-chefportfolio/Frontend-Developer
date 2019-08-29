
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { BrowserRouter as Router, Route, Link, Switch, withRouter } from 'react-router-dom';
import { reducer } from './reducers';
import './App.css';


import Signup from "./components/Signup";
import SignIn from "./components/Signin";
import HomePage from "./components/HomePage";
import Nav from "./components/Nav";
import Onboarding from "./components/forms/onboarding/Onboarding";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Recipe from "./components/Recipe";
import RecipeList from './components/feed/RecipeList';
import ChefList from "./components/feed/ChefList";
import RecipeAdd from './components/forms/RecipeAdd';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

function App() {
  return (
    <div className="App">

      <Nav />
      <Route exact path="/" component={HomePage} />
      <Route path="/signup" component={Signup} />
      <Route path="/onboarding" component={Onboarding} />
      <Route path="/signin" component={SignIn} />
      <Route path="/chefs" component={ChefList} />
      <Route path="/recipes" component={RecipeList} />
      <Route path="/profile/:id" component={Profile} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/recipe/:id" component={Recipe} />
      <RecipeAdd/>
    </div>
  )
}

const AppWithRouter = withRouter(App);

const rootElement = document.getElementById('root');

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <AppWithRouter />
    </Provider>
  </Router>
  ,
  rootElement
);
