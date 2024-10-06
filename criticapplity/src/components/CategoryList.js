import React, { useState } from 'react';

function CategoryList() {
  // Aquí iría tu lógica para obtener las categorías desde el JSON
  const categories = [
    'Acción',
    'Comedia',
    'Drama',
    // ...
  ];

  return (
    <div className="category-list">
      {/* Renderizar las categorías */}
      <ul>
        {categories.map(category => (
          <li key={category}>{category}</li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryList;