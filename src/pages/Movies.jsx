import { useSearchParams } from 'react-router-dom';
import { lazy, useCallback, useEffect, useState } from 'react';
import queryMoviesService from 'services/queryMoviesService';
const MoviesList = lazy(() => import('components/MoviesList'));

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const query = searchParams.get('query');

  const renderMovies = useCallback(() => {
    if (!query) return;
    queryMoviesService(query).then(resp => {
      setMovies(resp);
    });
  }, [query]);

  useEffect(() => {
    renderMovies();
  }, []);

  return (
    <>
      <form
        onSubmit={e => {
          e.preventDefault();
          renderMovies();
        }}
        className="query-form"
      >
        <input
          className="query-input"
          name="movieName"
          placeholder="movie name"
          value={searchParams.get('query') || ''}
          onChange={({ target: { value } }) => {
            if (!value) return setSearchParams({});
            setSearchParams({ query: value });
          }}
        ></input>
        <button type="submit" className="buttons">
          Search
        </button>
      </form>
      <MoviesList moviesArray={movies} />
    </>
  );
};

export default Movies;
