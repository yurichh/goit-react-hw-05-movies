import { useSearchParams } from 'react-router-dom';

const QueryForm = ({ setQuery }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const updateQueryParam = movieName => {
    if (!movieName) {
      return setSearchParams({});
    }
    setSearchParams({ query: movieName });
  };

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        const movieName = e.target[0].value;
        updateQueryParam(movieName);
        setQuery(movieName);
      }}
      className="query-form"
    >
      <input
        className="query-input"
        name="movieName"
        placeholder="movie name"
      ></input>
      <button type="submit" className="buttons">
        Search
      </button>
    </form>
  );
};

export default QueryForm;
