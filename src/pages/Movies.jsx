// import { Link } from 'react-router-dom';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import SearchMoviesList from 'components/SearchMoviesList';

const Movies = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [visibleMovies, setVisibleMovies] = useState([]);
  const query = searchParams.get('query');
  useEffect(() => {
    if (!query) {
      return;
    }
    fetchData();
  }, [page]);

  const fetchData = () => {
    if (!query) {
      return;
    }

    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/search/movie',
      params: {
        query: `${query}`,
        include_adult: 'false',
        language: 'en-US',
        page: `${page}`,
      },
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MDg3N2Q0NWI2ZTQ2NDU3MzJiMzM4ZmQ1MDY5ZmMyYyIsInN1YiI6IjY1ODQyYWNmY2E4MzU0NDE1NmQ3N2Y5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xk1Kciqlp7TV4RTr51i1EFwzQ98SxCY_Z1j0emz2etM',
      },
    };

    axios
      .request(options)
      .then(({ data }) => {
        console.log(data);
        setPage(data.page);
        setTotalResults(data.totalResults);
        setVisibleMovies(data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const handleChange = ({ target: { value } }) => {
    if (!value) {
      setSearchParams();
      return;
    }
    setSearchParams({ query: value });
    console.log('searchParams', searchParams);
  };

  return (
    <>
      <form
        onSubmit={e => {
          e.preventDefault();
          fetchData();
        }}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 20,
          marginBottom: '20px',
        }}
      >
        <input
          style={{
            textAlign: 'center',
            padding: '3px 20px',
            fontSize: 24,
          }}
          name="movieName"
          placeholder="movie name"
          value={searchParams.get('query') || ''}
          onChange={handleChange}
        ></input>
        <button type="submit" style={{ padding: '9px' }}>
          Search
        </button>
      </form>
      <SearchMoviesList visibleMovies={visibleMovies} location={location} />
    </>
  );
};

export default Movies;
