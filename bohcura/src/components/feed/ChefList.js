import React, { useEffect } from 'react';
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

const ChefList = (props) => {
  useEffect(() => {
    props.getChefs();
    console.log("UseEffect has run!", props.chefs)
  }, []);

  return (
    <Page>
      <h1>Professional Chefs</h1>
      <div>search</div>

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
