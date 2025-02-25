
import React, { useState } from 'react';
import MovieList from './MovieList';
import Filtre from './Filtre';
import './App.css';

function App() {
  
  const [movies, setMovies] = useState([
    { title: 'Inception', rating: 8.8 },
    { title: 'Titanic', rating: 7.8 },
    { title: 'Spider-Man : Across The Spider-Verse', rating: 5.9 },
    { title: 'Indiana Jones et la Dernière Croisade', rating: 4.3 },
    { title: 'Ip Man', rating: 6.2 },
    { title: 'Les Aventuriers de l Arche perdue', rating: 7.6},
    { title: 'Baby Cart la saga', rating: 4.2},
    {title: 'Léon', rating: 5.1}
  ]);


  const [filteredMovies, setFilteredMovies] = useState(movies);

  
  const filterMovies = (title) => {
    const filtered = movies.filter(movie =>
      movie.title.toLowerCase().includes(title.toLowerCase())
    );
    setFilteredMovies(filtered);  
  };

  return (
    <div>
      <Filtre onFilter={filterMovies} />
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;

