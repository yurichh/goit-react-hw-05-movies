import { lazy, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { queryMoviesService } from 'services/moviesServices';
const MoviesList = lazy(() => import('components/MoviesList'));
const QueryForm = lazy(() => import('components/QueryForm'));

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState(searchParams.get('query') || '');

  useEffect(() => {
    if (!query) return;
    queryMoviesService(query).then(resp => setMovies(resp));
  }, [query]);

  return (
    <>
      <QueryForm setQuery={setQuery} />
      {!movies || movies.length === 0 ? (
        <div style={{ textAlign: 'center', fontSize: 30, marginTop: 100 }}>
          Please, put a valid movie name in a field
        </div>
      ) : (
        <MoviesList moviesArray={movies} />
      )}
    </>
  );
};

export default Movies;
