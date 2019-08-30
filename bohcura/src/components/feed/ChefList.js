import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getChefs } from '../../actions';
import styled from 'styled-components';

import ChefCard from './ChefCard';


// styled components
const Div = styled.div`
    display: block;
    width: 80%;
    text-align: left;
    alignment-baseline: bottom;
    padding: 5%;
`;

const Cards = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

`;

const Title = styled.div`
    display: flex;
    text-align: left;
    justify-content: space-between;
    margin: 1.7%;
`;


const ChefList = (props) => {
  useEffect(() => {
    props.getChefs();
    console.log("UseEffect has run!", props.chefs)
  }, []);

  return (
    <Div>
      {/*<Title>*/}
      {/*  <h1>Professional Chefs</h1>*/}
      {/*</Title>*/}
      <Cards>
        {props.chefs.map(chef => <ChefCard chef={chef}/>)}
      </Cards>
    </Div>
  )
};

const mapStateToProps = state => {
  return {
    chefs: state.chefs
  }
};

export default connect(mapStateToProps, { getChefs })(ChefList);
