import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getChefs } from '../../actions';
import styled from 'styled-components';

import ChefCard from './ChefCard';

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
    // {chefs.map(f => <div className="chef" key={props.id}>
    //     <h2 className="name">{props.name}</h2>
    //     <span className="age">{props.age}</span>
    //     <span className="email">{props.email}</span>
    //
    //   </div>)}
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