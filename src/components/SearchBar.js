import React from 'react';

function SearchBar({ searchTerm, setSearchTerm }) {
return (
<div className="search-bar">
<input
type="text"
placeholder="Search recipes by title or description..."
value={searchTerm}
onChange={(e) => setSearchTerm(e.target.value)}
/>
</div>
);
}

export default SearchBar;

