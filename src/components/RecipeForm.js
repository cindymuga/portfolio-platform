import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RecipeForm({ onAddRecipe }) {
const [formData, setFormData] = useState({
title: '',
description: '',
image: '',
techStack: '',
});

const navigate = useNavigate();

const handleChange = (e) => {
setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = (e) => {
e.preventDefault();

fetch('http://localhost:3001/recipes', {
method: 'POST',
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify(formData),
})
.then((res) => res.json())
.then((newRecipe) => {
onAddRecipe(newRecipe);
navigate('/');
})
.catch((err) => console.error('Error posting recipe:', err));
};

return (
<form className="project-form" onSubmit={handleSubmit}>
<h2>Add New Recipe</h2>
<input
type="text"
name="title"
placeholder="Recipe Title"
value={formData.title}
onChange={handleChange}
required
/>
<input
type="text"
name="image"
placeholder="Image URL"
value={formData.image}
onChange={handleChange}
required
/>
<input
type="text"
name="techStack"
placeholder="Difficulty / Time (e.g., Easy • 20 mins)"
value={formData.techStack}
onChange={handleChange}
required
/>
<textarea
name="description"
placeholder="Recipe Description & Ingredients"
value={formData.description}
onChange={handleChange}
required
/>
<button type="submit">Submit Recipe</button>
</form>
);
}

export default RecipeForm;

