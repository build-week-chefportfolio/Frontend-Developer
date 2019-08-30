import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink } from "react-router-dom";

// import icons
import avatar from '../../assets/icons/avatar.png';
import chef from '../../assets/icons/chef.png';
import location from '../../assets/icons/location.png';
import mail from '../../assets/icons/mail.png';
import phone from '../../assets/icons/phone.png';
import profile from '../../assets/icons/profile.png';
import recipe from '../../assets/icons/recipe.png';

// styled components

const Card = styled.div`
    background-color: #f1f1f1;
    margin: 1.5rem;
    padding-bottom: .1rem;
`;

const Row = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 0.2rem .6rem 0.2rem;
    align-items: center;
`;

const Button = styled.button`
    background: #C4C4C4;
    border-radius: 4px;
    font-size: 16px;
    line-height: 21px;
    width: 6rem;
    padding: .75rem 0;
    color: black;
    border: none;
`;

const Left = styled.div`
    text-align: left;
`;

const Right = styled.div`
    margin-left: 3rem;
`;

const H5 = styled.h5`
    font-size: 1.2rem;
`;

class ChefCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chefs: props.chefs
    };
  }

  relocate = () => {
    if (this.props.chef.relocate) {
      return "not available"
    } else {
      return "available"
    }
  }

  render() {
    console.log("ChefCard with Class", this.props.chefs);
    return (
      <NavLink to={`/chef/${this.props.chef.id}`} className="chefCardLink">
        <Card>
          <img src={avatar} alt={'avatar'} style={{ width: '100%', height: "130px", overflow: "hidden" }} />
          <Row>
            <img src={chef} alt='chef icon' className="styledIconMain" />
            <Right>
              <H5>{this.props.chef.FirstNameLastName}</H5>
              Professional cook for {this.props.chef.yearsexp} years
          </Right>
          </Row>
          <hr style={{ color: '#C0BEBE', margin: '14px' }} />
          <Row>
            <Left>
              <div className='chefRow'>
                <img src={location} className='styledIcon' alt="map pin" />
                {this.props.chef.location},{this.props.chef.state}
              </div>
              <div className='chefRow'>
                <img src={phone} className='styledIcon' alt="phone icon" />{this.props.chef.telephone}
              </div>
              <div className='chefRow'>
                <img src={mail} className='styledIcon' alt="email icon" />{this.props.chef.email}
              </div>
            </Left>
            <div>
              <Row>{this.relocate()}</Row>
              <Row><Button>Hire Me</Button></Row>
            </div>

            {/*<div>*/}
            {/*  <Row>{this.props.chef.relocate} to relocate</Row>*/}
            {/*  <Row>Hire Me!</Row>*/}
            {/*</div>*/}
          </Row>

          <hr style={{ color: '#C0BEBE', margin: '14px' }} />
          <Row>
            <img src={recipe} alt="recipe book" />
            Chef's Recipes
          {' '}
            <img src={profile} alt="profile icon" />
            Chef's Profile
        </Row>
        </Card>
      </NavLink>



    )
  }
};

export default ChefCard;