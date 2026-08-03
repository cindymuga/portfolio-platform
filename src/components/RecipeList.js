import React from 'react';
import RecipeCard from './RecipeCard';

function RecipeList({ recipes }) {
return (
<div className="project-grid">
{recipes.length > 0 ? (
recipes.map((recipe) => (
<RecipeCard key={recipe.id} recipe={recipe} />
))
) : (
<p className="no-projects">No matching recipes found.</p>
)}
</div>
);
}

export default RecipeList;

