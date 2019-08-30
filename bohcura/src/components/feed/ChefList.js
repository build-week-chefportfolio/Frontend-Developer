import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getChefs } from '../../store/actions';
import styled from 'styled-components';

import ChefCard from './ChefCard';


// styled components
const Cards = styled.div`
    display: flex;
    margin: 40px auto;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 70%;
`;



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
