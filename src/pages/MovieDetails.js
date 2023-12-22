import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, Outlet, Link, useLocation } from 'react-router-dom';

const MovieDetails = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState({});

  const { state } = useLocation();
  console.log('state', state);

  const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/movie/${id}`,
    params: { language: 'en-US' },
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MDg3N2Q0NWI2ZTQ2NDU3MzJiMzM4ZmQ1MDY5ZmMyYyIsInN1YiI6IjY1ODQyYWNmY2E4MzU0NDE1NmQ3N2Y5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xk1Kciqlp7TV4RTr51i1EFwzQ98SxCY_Z1j0emz2etM',
    },
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const { data } = await axios.request(options);
        setMovie(data);
      } catch (error) {
        console.error('Помилка при отриманні фільмів', error);
      }
    };

    fetchMovies();
  }, []);
  const { poster_path, title, vote_average, overview } = movie;
  return (
    <>
      <Link
        style={{
          fontSize: 20,
          padding: '2px 20px',
          backgroundColor: 'black',
          color: 'white',
          borderRadius: '5px',
        }}
        to={state ? state : '/'}
      >
        Back
      </Link>
      <div className="det-wrapper">
        <div className="det-img-wrapper">
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={title}
          />
        </div>
        <div className="det-info-wrapper">
          <h1>{title}</h1>
          <h2>User average score: {vote_average}</h2>
          <h2>Overview</h2>
          <p>{overview}</p>
        </div>
      </div>
      <ul className="more-list">
        <li className="more-item">
          <Link to={'cast'} state={state}>
            Cast
          </Link>
        </li>
        <li className="more-item">
          <Link to={'reviews'} state={state}>
            Reviews
          </Link>
        </li>
      </ul>

      <Outlet />
    </>
  );
};

export default MovieDetails;
