import React from 'react';
import styled from 'styled-components';

// import icons
import avatar from '../../assets/icons/avatar.png';
import chef from '../../assets/icons/chef.png';
import location from '../../assets/icons/location.png';
import mail from '../../assets/icons/mail.png';
import phone from '../../assets/icons/phone.png';
import profile from '../../assets/icons/profile.png';
import recipe from '../../assets/icons/recipe.png';


const Card = styled.div`
    width: 344px;
    background-color: #f1f1f1;
    margin: 1.5rem 1.5rem 1.5rem 2.5rem;
    padding-bottom: .1rem;
`;

const Row = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 1.6rem;
    align-content: baseline;
`;

const ChefCard = ( props ) => {
  console.log(props);
  return(
    <Card>
       <img src={avatar} alt={'avatar'} />
        <Row>
          <div>
            <img src={chef} alt='chef icon'/>
          </div>
          <div>
            {props.name}<br/>Professional cook for {props.yearsXP} years
          </div>
        </Row>

        <hr style={{color:'#C0BEBE', margin:'14px'}}/>

          <Row>
            <div className='leftCol'>
              <div className='chefRow'>
                  <img src={location} alt="map pin" />
                    {props.city}City,{props.state} State
              </div>
              <div className='chefRow'>
                  <img src={phone} alt="phone icon"/>{props.phone}(555)999-9999
              </div>
              <div className='chefRow'>
                  <img src={mail} alt="email icon"/>{props.email}bill@microsoft.com
              </div>
            </div>
            <div>
              <Row>{props.relocate} to relocate</Row>
              <Row><button>Hire Me</button></Row>
            </div>
          </Row>
      <hr style={{color:'#C0BEBE', margin:'14px'}}/>
        <Row>
              <img src={recipe} alt="recipe book"/>
              Chef's Recipes
          {' '}
              <img src={profile} alt="profile icon"/>
              Chef's Profile
        </Row>
    </Card>

  )
};

export default ChefCard;
