import React from 'react';
import '../App.css';
import { NavLink } from "react-router-dom"

export default function Nav () {
    return (
        <nav className="navBar">
            <NavLink to="/" className="logo">bohcura</NavLink>
            <div>
                <NavLink to="/" className="navItem">Home</NavLink>
                <NavLink to="/chefs" className="navItem">Chefs</NavLink>
                <NavLink to="/recipes" className="navItem">Recipes</NavLink>
                <NavLink to="/about" className="navItem">About</NavLink>
                <NavLink to="/signin" className="navItem">Sign In</NavLink>
                <NavLink to="/signup" className="navItem">Sign Up</NavLink>
                <NavLink to="/dashboard" className="navItem">My Bohcura</NavLink>
            </div>
        </nav>
    )
}