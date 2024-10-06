import React from 'react';
import ShowsList from './components/ShowsList'; // Ajusta la ruta si es necesaria
import CategoryList from './components/CategoryList'; // Ajusta la ruta si es necesaria
import SearchBar from './components/SearchBar'; // Ajusta la ruta si es necesaria
import Header from './components/Header'
import './App.css'

function App() {
  return (
    <div>
        <Header title="Mi Aplicación" />
        <SearchBar/>
      <h1>Mis series favoritas</h1>
      <div className="container">
      <CategoryList />
      <ShowsList />
    </div>
    </div>
  );
}

export default App;