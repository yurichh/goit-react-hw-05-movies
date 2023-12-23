import MoviesList from 'components/MoviesList';
import React, { useCallback, useEffect, useState } from 'react';
import trendMoviesService from 'services/trendMoviesService';

const Home = () => {
  const [movies, setMovies] = useState([]);

  const getTrendMovies = useCallback(async () => {
    return trendMoviesService().then(resp => {
      setMovies(resp);
    });
  }, []);

  useEffect(() => {
    getTrendMovies();
  }, [getTrendMovies]);

  return (
    <div>
      <h1
        style={{
          textAlign: 'center',
          fontSize: 60,
          marginBottom: 20,
        }}
      >
        Trending today
      </h1>
      <MoviesList moviesArray={movies} />
    </div>
  );
};

export default Home;
