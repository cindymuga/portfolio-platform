import React from 'react';

function RecipeCard({ recipe }) {
return (
<div className="project-card">
<img src={recipe.image} alt={recipe.title} />
<h3>{recipe.title}</h3>
<p className="tech-stack"><strong>Details:</strong> {recipe.techStack}</p>
<p>{recipe.description}</p>
</div>
);
}

export default RecipeCard;

