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
                <img src={chefIMG} alt="chef" />
                <h2>Chefs</h2>
            </div>
            <div className="homeRecipeContainer">
                <img src={recipeIMG} alt="chef" />
                <h2>Recipes</h2>
            </div>
        </div>
    )
}