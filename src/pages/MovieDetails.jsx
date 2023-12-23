import { Suspense, useEffect, useState } from 'react';
import { useParams, Outlet, Link, useLocation } from 'react-router-dom';
import singleMovieService from 'services/singleMovieService';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const { state } = useLocation();

  useEffect(() => {
    singleMovieService(id).then(resp => {
      setMovie(resp);
    });
  }, [id]);
  const { poster_path, title, vote_average, overview } = movie;
  return (
    <>
      <Link className="buttons" to={state ? state.from : '/'}>
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
      <Suspense fallback={<span className="loader"></span>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
