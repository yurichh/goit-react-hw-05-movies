import axios from 'axios';
import TrendMoviesList from 'components/TrendMoviesList';
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

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
