import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getChefs } from '../../actions';
import styled from 'styled-components';

import ChefCard from './ChefCard';
import RecipeCard from "./RecipeCard";
// import mapStateToProps from "react-redux/es/connect/mapStateToProps";

// styled components


const ChefList = (props) => {
  useEffect(() => {
    props.getChefs();
    console.log("UseEffect has run!", props.chefs)
  }, []);

  return (
    <div>
      <h1>Professional Chefs</h1>
      <div>search</div>

      {props.chefs.map(chef => <ChefCard chef={chef} />)}

    </div>
  )
};

const mapStateToProps = state => {
  return {
    chefs: state.chefs
  }
};

export default connect(mapStateToProps, { getChefs })(ChefList);
