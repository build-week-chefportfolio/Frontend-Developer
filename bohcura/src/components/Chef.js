import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getChef } from '../actions';
import { Header, Image, Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

// How are we routing to the page?  Just filtering by id?  Or using an action?

// styled components


const Chef = ( { chef, getChef, match: { params: { id } } } ) => {
  console.log(chef);
  useEffect(() => {
    getChef(id);
    console.log("Chef data has been received!", chef)
  }, []);

  const convertCourse = course => {
    switch(course) {
      case 1: return 'First Course';
      case 2: return 'Second Course';
      case 3: return 'Third Course';
      case 4: return 'Fourth Course';
      case 5: return 'Fifth Course';
      default: return 'First Course';
    }
  };

  if(!chef || !chef.hasOwnProperty('FirstNameLastName')) return <div>Loading...</div>;

  return (
    <div>
      <h1>Chef {chef.FirstNameLastName}</h1>
      <h2>Professional Chef for {chef.yearsexp}</h2>
      <button>Hire Me</button>

      <hr />

      <div>
        {chef.email}
        {chef.telephone}
        {chef.relocate}
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

    </div>
  )
};

const mapStateToProps = state => {
  return {
    chef: state.chef
  }
};

export default connect(mapStateToProps, { getChef })(Chef);