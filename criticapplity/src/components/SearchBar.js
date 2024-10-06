import React, { useState } from 'react';
import '../styles/searchbar.css'


function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes realizar la búsqueda, por ejemplo, enviando el término de búsqueda a un servidor
    console.log('Término de búsqueda:', searchTerm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Buscar..."
        value={searchTerm}
        onChange={handleChange}
      />
      <button type="submit">Buscar</button>
    </form>
  );
}

export default SearchBar;