
import React from 'react';

function MovieCard({ title, rating }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>note :{rating}</p>
    </div>
  );
}

export default MovieCard;
