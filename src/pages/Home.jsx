import TrendMoviesList from 'components/TrendMoviesList';
import React from 'react';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation();
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
      <TrendMoviesList location={location} />
    </div>
  );
};

export default Home;
