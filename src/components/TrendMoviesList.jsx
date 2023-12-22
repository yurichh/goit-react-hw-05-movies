import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const TrendMoviesList = ({ location }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/trending/movie/day',
        params: { language: 'en-US' },
        headers: {
          accept: 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MDg3N2Q0NWI2ZTQ2NDU3MzJiMzM4ZmQ1MDY5ZmMyYyIsInN1YiI6IjY1ODQyYWNmY2E4MzU0NDE1NmQ3N2Y5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xk1Kciqlp7TV4RTr51i1EFwzQ98SxCY_Z1j0emz2etM',
        },
      };

      try {
        const response = await axios.request(options);
        const results = response.data.results;
        setMovies(results);
      } catch (error) {
        console.error('Error with getting films', error);
      }
    };

    fetchMovies();
  }, []);
  return (
    <ul className="trends-list">
      {movies.map(({ id, title, poster_path }) => (
        <li key={id} className="trends-list-item">
          <img
            className="trends-list-img"
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={title}
            style={{ marginBottom: 10 }}
          />
          <Link to={`movies/${id}`} state={location}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default TrendMoviesList;
