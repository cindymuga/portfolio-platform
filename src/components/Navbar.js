import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
return (
<nav className="navbar">
<h1>Recipe Showcase Platform</h1>
<div className="nav-links">
<Link to="/">All Recipes</Link>
<Link to="/add">Add Recipe</Link>
</div>
</nav>
);
}

export default Navbar;

