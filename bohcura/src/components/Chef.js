import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getChef } from '../actions';
import { Header, Image, Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import RecipeAdd from "./forms/RecipeAdd";

import styled from 'styled-components';

// How are we routing to the page?  Just filtering by id?  Or using an action?

// styled components
const Title = styled.div`
    display: flex;
    justify-content: space-between;
    align-content: flex-end;
`;

const Div = styled.div`
    display: block;
    //width: 90%;
    margin: 10%;
    text-align: left;
    alignment-baseline: bottom;
    padding: 5%;
`;

const Row = styled.div`
    display: flex;
    justify-content: space-between;
    //margin: 1.6rem;
    align-content: baseline;
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

const H4 = styled.h4`
    font-family: 'Lato', sans-serif
`;

const H5 = styled.h5`
    border-left: 2px solid gray;
    line-height: 1.6rem;

    text-align: left;
    font-family: 'Libre Franklin', sans-serif;
`;

const H6 = styled.div`
    line-height: 3rem;
    font-size: 1.2rem;
    font-family: 'Libre Franklin', sans-serif;
`;

const Center = styled.div`
    display: flex;
    margin: auto;
    text-align: center;
`;

const Paragraph = styled.div`
    line-height: 3rem;
    font-size: 1.4rem;
    font-family: 'Libre Franklin', sans-serif;
    text-align: justify-all;
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

const Chef = ({ chef, getChef, match: { params: { id } } }) => {
  console.log(chef);
  const [isAdding, setIsAdding] = useState(false);
  useEffect(() => {
    getChef(id);
    console.log("Chef data has been received!", chef)
  }, []);

  const toggleIsAdding = () => setIsAdding(!isAdding);


  const convertCourse = course => {
    switch (course) {
      case 1: return 'First Course';
      case 2: return 'Second Course';
      case 3: return 'Third Course';
      case 4: return 'Fourth Course';
      case 5: return 'Fifth Course';
      default: return 'First Course';
    }
  };

  if (!chef || !chef.hasOwnProperty('FirstNameLastName')) return <div>Loading...</div>;

  return (
    <Div>
      <Title>
        <div><H1>Chef {chef.FirstNameLastName}</H1>
          <H3>Professional Chef for {chef.yearsexp}{" "} years</H3></div>
        <div><button className='chefButtons'>Hire Me</button></div>
      </Title>
      <br/>
      <hr />

      <ContactInfo>
        <div>{chef.email}</div>
        <div>{chef.telephone}</div>
        <div>{chef.relocate}</div>
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
      <div className='recipes-container'>
        <Table basic='very' celled collapsing>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Recipe</Table.HeaderCell>
              <Table.HeaderCell>Course</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {chef.recipe.map(recipe => {
              return (
                <Table.Row>
                  <Table.Cell>
                    <Header as='h4' image>
                      <Link to={`/recipe/${recipe.id}`}>
                        <Image src={null} rounded size='mini' />
                        <Header.Content>{recipe.RecipeName}</Header.Content>
                      </Link>
                    </Header>
                  </Table.Cell>
                  <Table.Cell>
                    {convertCourse(recipe.course)}
                  </Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </div>
    </Div>
  )
};

const mapStateToProps = state => {
  return {
    chef: state.chef
  }
};

export default connect(mapStateToProps, { getChef })(Chef);