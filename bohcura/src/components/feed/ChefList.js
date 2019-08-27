import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getChefs } from '../../actions';
import { Card, Icon, Divider } from 'semantic-ui-react'

import ChefCard from './ChefCard';

const ChefList = ({ props }) => {


  return (
    // {chefs.map(f => <div className="chef" key={props.id}>
    //     <h2 className="name">{props.name}</h2>
    //     <span className="age">{props.age}</span>
    //     <span className="email">{props.email}</span>
    //
    //   </div>)}
    <div>
    <h1>Professional Chefs</h1>
      <div>search</div>
    <div className="chefList">
      <Card.Group>
        <ChefCard/>
        <ChefCard/>
        <ChefCard/>
     </Card.Group>
    </div>
    </div>
  )
};

export default ChefList;