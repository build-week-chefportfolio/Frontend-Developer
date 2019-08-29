import React from 'react';
import chefIMG from "../assets/zahir-namane-YTsEZrHqDq0-unsplash.jpg"
import recipeIMG from "../assets/christine-siracusa-vzX2rgUbQXM-unsplash.jpg"
import { NavLink } from "react-router-dom"
import '../App.css';
//get navlinks on the imgs
export default function HomePage() {
    return (
        <div className="homeContainer">
            <h1>Welcome to Bohcura, where professional chefs connect with culinary enthusiasts.</h1>
            <div className="homeChefContainer">
                <NavLink to="/chefs" className="chefNavLink">
                    <img src={chefIMG} alt="chef" />
                    <h2>Chefs</h2>
                </NavLink>
            </div>  
            <div className="homeRecipeContainer">
                <NavLink to="recipes" className="recipeNavLink">
                    <img src={recipeIMG} alt="recipie" className="recipeNavLink"/>
                    <h2>Recipes</h2>
                </NavLink>
            </div>
            
        </div>
    )
}