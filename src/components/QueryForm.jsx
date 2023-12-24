import React, { useEffect } from 'react';
import { queryMoviesService } from '../services/moviesServices';
import { useSearchParams } from 'react-router-dom';

const QueryForm = ({ setMovies }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const renderMovies = () => {
    queryMoviesService(query).then(resp => {
      setMovies(resp);
    });
  };

  const updateQueryParam = e => {
    const movieName = e.target.value;
    if (movieName === '') {
      return setSearchParams({});
    }
    setSearchParams({ query: movieName });
  };

  useEffect(() => {
    if (query === '') return;
    renderMovies();
  }, []);

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        console.log(e);
        renderMovies();
      }}
      className="query-form"
    >
      <input
        className="query-input"
        name="movieName"
        placeholder="movie name"
        value={query}
        onChange={updateQueryParam}
      ></input>
      <button type="submit" className="buttons">
        Search
      </button>
    </form>
  );
};

export default QueryForm;
