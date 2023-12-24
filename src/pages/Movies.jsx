import { lazy, useState } from 'react';

const MoviesList = lazy(() => import('components/MoviesList'));
const QueryForm = lazy(() => import('components/QueryForm'));

const Movies = () => {
  const [movies, setMovies] = useState([]);
  return (
    <>
      <QueryForm setMovies={setMovies} />
      {!movies || movies.length === 0 ? (
        <div style={{ textAlign: 'center', fontSize: 40, marginTop: 100 }}>
          Please, put a valid name in a field
        </div>
      ) : (
        <MoviesList moviesArray={movies} />
      )}
    </>
  );
};

export default Movies;
