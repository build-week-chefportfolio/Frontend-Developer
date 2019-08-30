import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getChefs } from '../../actions';
import styled from 'styled-components';

import ChefCard from './ChefCard';


// styled components
// const Div = styled.div`
//     display: block;
//     width: 95%;
//     text-align: left;
//     alignment-baseline: bottom;
//     padding: 5%;
// `;

const Cards = styled.div`
    display: flex;
    margin: 40px auto;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 70%;
`;

// const Title = styled.div`
//     display: flex;
//     text-align: left;
//     justify-content: space-between;
//     margin: 1.7%;
// `;


const ChefList = (props) => {
  useEffect(() => {
    props.getChefs();
    console.log("UseEffect has run!", props.chefs)
  }, []);

  return (
    <div>
      <h1 className="proChefs">Professional Chefs</h1>
      <Cards className="chefList">
        {props.chefs.map(chef => <ChefCard chef={chef} />)}
      </Cards>
    </div>
  )
};

const mapStateToProps = state => {
  return {
    chefs: state.chefs
  }
};

export default connect(mapStateToProps, { getChefs })(ChefList);
