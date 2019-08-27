import React from 'react';
import styled from 'styled-components';

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
    margin: 2rem;
`;

const Column = styled.div`
    
`;

const Row = styled.div`
    display: flex;
    justify-content: space-between;
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
                    {props.city},{props.state}
              </div>
              <div className='chefRow'>
                  <img src={phone} alt="phone icon"/>{props.phone}
              </div>
              <div className='chefRow'>
                  <img src={mail} alt="email icon"/>{props.email}
              </div>
            </div>
          </Row>

        <Row>
          <div className='leftCol'>
            <a>
              <img src={recipe} alt="recipe book"/>
              Chef's Recipes
            </a>
          </div>
          <div className='rightCol'>
              <img src={profile} alt="profile icon"/>
              Chef's Profile
              <br /><br />
          </div>
        </Row>
    </Card>

  )
};

export default ChefCard;
