import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import RecipeForm from './components/RecipeForm';
import './App.css';

function App() {
const [recipes, setRecipes] = useState([]);
const [searchTerm, setSearchTerm] = useState('');

useEffect(() => {
fetch('http://localhost:3001/recipes')
.then((res) => res.json())
.then((data) => setRecipes(data))
.catch((err) => console.error('Error fetching recipes:', err));
}, []);

const handleAddRecipe = (newRecipe) => {
setRecipes((prevRecipes) => [...prevRecipes, newRecipe]);
};

const filteredRecipes = recipes.filter(
(recipe) =>
recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
recipe.description.toLowerCase().includes(searchTerm.toLowerCase())
);

return (
<Router>
<div className="App">
<Navbar />
<div className="container">
<Routes>
<Route
path="/"
element={
<>
<SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
<RecipeList recipes={filteredRecipes} />
</>
}
/>
<Route
path="/add"
element={<RecipeForm onAddRecipe={handleAddRecipe} />}
/>
</Routes>
</div>
</div>
</Router>
);
}

export default App;

