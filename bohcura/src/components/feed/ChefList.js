import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getChefs } from '../../actions';
import styled from 'styled-components';

import ChefCard from './ChefCard';


// styled components


const ChefList = (props) => {
  useEffect(() => {
    props.getChefs();
    console.log("UseEffect has run!", props.chefs)
  }, []);

  return (
<<<<<<< HEAD
    <div>
      <h1>Professional Chefs</h1>
      <div>search</div>
=======
    <Page>
        <h1>Professional Chefs</h1>
        <div>search</div>
>>>>>>> 340e06d4e1e9283d912f12222e3a8275dcf047f9

      {props.chefs.map(chef => <ChefCard chef={chef} />)}

    </Page>
  )
};

const mapStateToProps = state => {
  return {
    chefs: state.chefs
  }
};

export default connect(mapStateToProps, { getChefs })(ChefList);
