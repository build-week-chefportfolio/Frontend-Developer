import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getChef } from '../actions';
import RecipeListGrid from './RecipeListGrid';

import styled from 'styled-components';

// How are we routing to the page?  Just filtering by id?  Or using an action?

// Styling
const Title = styled.div`
    display: flex;
    justify-content: space-between;
    align-content: flex-end;
`;

const Div = styled.div`
    display: block;
    //width: 90%;
    margin:0 10%;
    text-align: left;
    alignment-baseline: bottom;
 
`;

const H1 = styled.h1`
    text-align: left;
    font-family: 'Fahkwang', sans-serif;
    font-weight: bolder;
    font-size: 36px;
    line-height: 3rem;
    color: #e54236;
`;

const H2 = styled.h2`
    font-size: 1.8rem;
    padding-right: 2rem;
    text-align: left;
    font-family: 'Fahkwang', sans-serif;
     line-height: 3rem;
       color: #e54236;
`;

const H3 = styled.h3`
    font-size: 1.8rem;
    padding-right: 2rem;
    text-align: left;
    font-family: 'Fahkwang', sans-serif;
    line-height: 3rem;
    color: black;
`;

const ContactInfo = styled.div`
    display: flex;
    margin: auto;
    justify-content: space-between;
    line-height: 3rem;
`;

const Description = styled.div`
    font-size: 1.2rem;
    font-family: 'Libre Franklin', sans-serif;
    text-align: justify;
    line-height: 2rem;
    padding-top: 2rem;
`;

const MyRecipes = styled.div`
    padding-top: 3rem;
`;

const Chef = (props) => {
  let { chef, getChef, deleteRecipe } = props;
  console.log(chef);
  let id = props.match && props.match.params && props.match.params.id ? props.match.params.id : null;
  const [isAdding, setIsAdding] = useState(false);
  useEffect(() => {
    let localID = localStorage.getItem('chef');
    getChef(id || localID);
    console.log("Chef data has been received!", chef)
  }, []);

  const toggleIsAdding = () => setIsAdding(!isAdding);


  if (!chef || !chef.hasOwnProperty('FirstNameLastName')) return <div>Loading...</div>;

  return (
    <Div>
      <Title>
        <div><H1>Chef {chef.FirstNameLastName}</H1>
          <H3>Professional Chef for {chef.yearsexp}{" "} years</H3></div>
        <div><H3>Hire Me!</H3></div>
      </Title>
      <br />
      <hr />

      <ContactInfo>
        <div>{chef.email}</div>
        <div>{chef.telephone}</div>
        <div>{chef.relocate}{" "} to Relocate</div>
      </ContactInfo>

      <hr />
      <br />
      <Description>
        <H2>About Me</H2><br />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A arcu cursus vitae
          congue. Et malesuada fames ac turpis egestas integer eget aliquet. Scelerisque eu ultrices vitae auctor eu augue ut lectus arcu. Semper risus in
          hendrerit gravida rutrum quisque non tellus. Volutpat consequat mauris nunc congue nisi vitae. Integer vitae justo eget magna fermentum iaculis
          eu non diam. Aliquet enim tortor at auctor urna nunc. Nullam non nisi est sit amet facilisis magna. Velit laoreet id donec ultrices tincidunt arcu non
          sodales neque. Placerat in egestas erat imperdiet sed euismod nisi porta. Est lorem ipsum dolor sit. Ultricies lacus sed turpis tincidunt id aliquet
          risus feugiat in. Ultrices in iaculis nunc sed augue lacus viverra vitae congue. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt.</p>
      </Description>
      <br />
      <MyRecipes>
        <H2>My Recipes</H2>
      </MyRecipes>
      <RecipeListGrid chef={chef} isAdding={isAdding} toggle={toggleIsAdding} canAdd={!id} />
    </Div>
  )
};

const mapStateToProps = state => {
  return {
    chef: state.chef
  }
};

export default connect(mapStateToProps, { getChef })(Chef);