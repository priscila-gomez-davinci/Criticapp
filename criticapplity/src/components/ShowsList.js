import React, { useState, useEffect } from 'react';
import showsData from '../models/shows.json';

function ShowList() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    setShows(showsData);
  }, []);

  return (
    <ul>
      {shows.map(show => (
        <li key={show.id}>
          <h2>{show.title}</h2>
          <p>{show.description}</p>
        </li>
      ))}
    </ul>
  );
}

export default ShowList;