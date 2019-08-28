import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getChefs } from '../../actions';
import styled from 'styled-components';

import ChefCard from './ChefCard';

// styled components
const Page = styled.div`
    padding: 5rem;
`;

const CardGroup = styled.div`
    display: flex;
    margin: auto;
    justify-content: space-evenly;
`;

const Row = styled.div`
    display: flex;
    justify-content: space-between;
`;


const ChefList = ({ getChefs }) => {
  const [chefs, setChefs] = useState([]);
  return (
    <Page>
      <Row>
        <h1>Professional Chefs</h1>
        <div>search</div>
      </Row>
      <div className="chefList">
        <CardGroup>
          <ChefCard/>
          <ChefCard/>
          <ChefCard/>
       </CardGroup>
        <CardGroup>
          <ChefCard/>
          <ChefCard/>
          <ChefCard/>
        </CardGroup>
      </div>
    </Page>
  )
};

export default ChefList;