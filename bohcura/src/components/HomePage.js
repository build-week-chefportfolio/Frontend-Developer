import React from 'react';
import chefIMG from "../assets/zahir-namane-YTsEZrHqDq0-unsplash.jpg"
import recipeIMG from "../assets/christine-siracusa-vzX2rgUbQXM-unsplash.jpg"
import { NavLink } from "react-router-dom"
import '../App.css';
//get navlinks on the imgs
export default function HomePage() {
    return (
        <div className="homeContainer">
            <div className="homeChefContainer">

                <img src={chefIMG} alt="chef" />
                <p>Ricksum Hipsum Ricksum Hipsum Ricksum Hipsum Ricksum Hipsum Ricksum Hipsum Ricksum Hipsum Ricksum Hipsum Ricksum Hipsum Ricksum Hipsum Ricksum Hipsum Ricksum Hipsum Ricksum Hipsum</p>
                <div className="chefButtons">
                    <NavLink to="/signup"><button>Sign Up</button></NavLink>
                    <NavLink to="/chefs"><button>View Chefs</button></NavLink>
                </div>
            </div>
            <div className="homeCRText">
                <h1>{"chefs"}</h1>
                <h1>{"&"}</h1>
                <h1>{"recipes"}</h1>
            </div>
            <div className="homeRecipeContainer">
                <img src={recipeIMG} alt="chef" />
                <p>Lickity Splitsum Lickity Splitsum Lickity Splitsum Lickity Splitsum Lickity Splitsum Lickity Splitsum Lickity Splitsum Lickity Splitsum Lickity Splitsum Lickity Splitsum Lickity Splitsum Lickity Splitsum</p>
                <div className="recipeButtons">
                <NavLink to="/recipes"><button>View Recipes</button></NavLink>
                </div>
            </div>
        </div>
    )
}