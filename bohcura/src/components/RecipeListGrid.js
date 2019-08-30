import React, { useEffect } from 'react';
import { Header, Image, Table } from "semantic-ui-react";
import { Link } from "react-router-dom";
import RecipeAdd from "./forms/RecipeAdd";
import { connect } from 'react-redux';
import { deleteRecipe, putRecipe } from "../store/actions";

const RecipeListGrid = (props) => {
  let { chef, canAdd, toggle, isAdding, deleteRecipe } = props;

  useEffect(() => {
    console.log('Rerendering');
  }, [chef.recipes]);

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

  const deleteItem = (id) => {
    deleteRecipe(id);
  };

  const editItem = (id, item) => {
    putRecipe(id, item)
  }

  return !isAdding ? (
    <div className='recipes-container'>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Recipe</Table.HeaderCell>
            <Table.HeaderCell>Course</Table.HeaderCell>
            {canAdd ? (<Table.HeaderCell><button style={{ padding: '5px 10px' }} onClick={toggle}>Add Recipe</button></Table.HeaderCell>) : null}
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
                <Table.Cell>
                  <button style={{ padding: '5px 10px', marginRight: '10px' }} onClick={() => deleteItem(recipe.id)}>Delete</button>
                  <button style={{ padding: '5px 10px' }} onClick={() => deleteItem(recipe.id)}>Edit</button>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  ) : (
      <RecipeAdd toggle={toggle} />
    );
};

const mapStateToProps = state => state;

export default connect(mapStateToProps, { deleteRecipe, putRecipe })(RecipeListGrid);