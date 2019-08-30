import React from 'react';
import '../App.css';
import { NavLink } from "react-router-dom"

import styled from 'styled-components';

// styled components
const NavContainer = styled.div`
    background-color: #303030;
    width: 100%;
    height: 75px;
    line-height: 50px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-content: center;
    z-index: 10000;
        @media (max-width: 768px) {
        height: auto;
    }
`;


const LogoText = styled.h1`
    margin-left: 1rem;
    font-weight: bold;
    font-size: 1.7rem;
    color: #EDEDED;
    font-family: 'Special Elite', cursive;
    
`;

const Links = styled.div`
`;



export default function Nav() {
    return (
        <>
            <NavContainer className='navBar'>
                <a href="https://bohcurachefs.netlify.com/index.html" className="logo">
                    <h1>bohcura.</h1>
                </a>

                <Links className="nav">
                    <div className='links'>
                    <NavLink to="/" className='a'>Home</NavLink>
                    <NavLink to="/chefs" className='a'>Chefs</NavLink>
                    <NavLink to="/recipes" className='a'>Recipes</NavLink>
                    <a className='a' href="https://bohcurachefs.netlify.com/about.html">About</a>
                    <NavLink to="/dashboard" className='a'>My Bohcura</NavLink>
                    </div>
                </Links>
            </NavContainer>
        </>
    )
} 