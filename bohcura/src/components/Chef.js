import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getChefs } from '../actions';

import styled from 'styled-components';

// How are we routing to the page?  Just filtering by id?  Or using an action?

// styled components


const Chef = ( props ) => {

  useEffect(() => {
    props.getChefs();
    console.log("Chef data has been received!", props.chefs)
  }, []);


  return (
    <div>
      <h1>Chef First Name Last Name</h1>
        <h2>Professional Chef for {props.chefs.yearsexp}</h2>
        <button>Hire Me</button>
        {props.chefs.map(chef => {
        return <div
          key={chef.id}
          />
        })}

      <hr />

      <div>
        {props.chefs.email}
        {props.chefs.telephone}
        {props.chefs.relocate}
      </div>

      <div>
        <h2>About Me</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A arcu cursus vitae <br />
        congue. Et malesuada fames ac turpis egestas integer eget aliquet. Scelerisque eu ultrices vitae auctor eu augue ut lectus arcu. Semper risus in <br />
        hendrerit gravida rutrum quisque non tellus. Volutpat consequat mauris nunc congue nisi vitae. Integer vitae justo eget magna fermentum iaculis <br />
        eu non diam. Aliquet enim tortor at auctor urna nunc. Nullam non nisi est sit amet facilisis magna. Velit laoreet id donec ultrices tincidunt arcu non <br />
        sodales neque. Placerat in egestas erat imperdiet sed euismod nisi porta. Est lorem ipsum dolor sit. Ultricies lacus sed turpis tincidunt id aliquet <br />
        risus feugiat in. Ultrices in iaculis nunc sed augue lacus viverra vitae congue. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt.</p>
      </div>
      <div>
        <h2>My Recipes</h2>
      </div>

      <div>
        {/*Recipe Headers Here*/}
      </div>

      <div>
        {/*Recipes Go Here*/}
      </div>

    </div>
  )
};

const mapStateToProps = state => {
  return {
    chefs: state.chefs
  }
};

export default connect(mapStateToProps, { getChefs })(Chef);