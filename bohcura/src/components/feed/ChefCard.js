import React, {Component} from 'react';
import styled from 'styled-components';

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
    width: 344px;
    background-color: #f1f1f1;
    margin: 1.5rem 1.5rem 1.5rem 2.5rem;
    padding-bottom: .1rem;
`;

const Row = styled.div`
    display: flex;
    justify-content: space-between;
    margin: .6rem;
    align-items: center;
`;

const Button = styled.button`
    background: #C4C4C4;
    border-radius: 4px;
    font-size: 16px;
    line-height: 21px;
    width: 7rem;
    padding: .75rem 0;
    color: black;
    border: none;
`;

const Left = styled.div`
    text-align: left;
`;

class ChefCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chefs: props.chefs
    };
 }
// }
//
// const ChefCard = ( props ) => {
//   console.log("chef card stuff here:",props);

 render() {
    console.log("ChefCard with Class", this.props.chefs);
  return(

    <Card>
      <img src={avatar} alt={'avatar'} />
      <Row>
        <img src={chef} alt='chef icon'/>
        <div>
          <h5>{this.props.chef.FirstNameLastName}</h5>
          Professional cook for {this.props.chef.yearsexp} years
        </div>
      </Row>
      <hr style={{color: '#C0BEBE', margin: '14px'}}/>
      <Row>
        <Left>
          <div className='chefRow'>
            <img src={location} alt="map pin" />
            {this.props.chef.location},{this.props.chef.state}
          </div>
          <div className='chefRow'>
            <img src={phone} alt="phone icon"/>{this.props.chef.telephone}
          </div>
          <div className='chefRow'>
            <img src={mail} alt="email icon"/>{this.props.chef.email}
          </div>
        </Left>
        <div>
          <Row>{this.props.chef.relocate} to relocate</Row>
          <Row><Button>Hire Me</Button></Row>
        </div>
      </Row>
      <hr style={{color: '#C0BEBE', margin: '14px'}}/>
      <Row>
        <img src={recipe} alt="recipe book"/>
        Chef's Recipes
        {' '}
        <img src={profile} alt="profile icon"/>
        Chef's Profile
      </Row>
    </Card>



)
}
};

export default ChefCard;

{/*<Card>*/}
{/*<img src={avatar} alt={'avatar'} />*/}
{/*<Row>*/}
{/*<img src={chef} alt='chef icon'/>*/}
{/*<div>*/}
{/*<h5>{props.chef.FirstNameLastName}</h5>*/}
{/*Professional cook for {props.chef.yearsexp} years*/}
{/*</div>*/}
{/*</Row>*/}
{/*<hr style={{color: '#C0BEBE', margin: '14px'}}/>*/}
{/*<Row>*/}
{/*<Left>*/}
{/*<div className='chefRow'>*/}
{/*<img src={location} alt="map pin" />*/}
{/*{props.chef.location},{props.chef.state}*/}
{/*</div>*/}
{/*<div className='chefRow'>*/}
{/*<img src={phone} alt="phone icon"/>{props.chef.telephone}*/}
{/*</div>*/}
{/*<div className='chefRow'>*/}
{/*<img src={mail} alt="email icon"/>{props.chef.email}*/}
{/*</div>*/}
{/*</Left>*/}
{/*<div>*/}
{/*<Row>{props.chef.relocate} to relocate</Row>*/}
{/*<Row><Button>Hire Me</Button></Row>*/}
{/*</div>*/}
{/*</Row>*/}
{/*<hr style={{color: '#C0BEBE', margin: '14px'}}/>*/}
{/*<Row>*/}
{/*<img src={recipe} alt="recipe book"/>*/}
{/*Chef's Recipes*/}
{/*{' '}*/}
{/*<img src={profile} alt="profile icon"/>*/}
{/*Chef's Profile*/}
{/*</Row>*/}
{/*</Card>*/}