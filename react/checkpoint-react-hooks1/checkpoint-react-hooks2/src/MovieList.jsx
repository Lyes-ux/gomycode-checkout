
import MovieCard from './MovieCard';

function MovieList({ movies }) {
  return (
    <div>
      {movies.map((movie, index) => (
        <MovieCard key={index} title={movie.title} rating={movie.rating} />
      ))}
    </div>
  );
}

export default MovieList;
