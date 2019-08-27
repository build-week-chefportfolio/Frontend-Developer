import React from 'react';
import { NavLink } from "react-router-dom"

export default function Nav () {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/feed/chefs">Chefs</NavLink>
            <NavLink to="/feed/recipes">Recipes</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/dashboard">My Bohcura</NavLink>
        </nav>
    )
}