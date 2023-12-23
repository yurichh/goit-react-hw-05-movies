import { Link, useLocation } from 'react-router-dom';

const MoviesList = ({ moviesArray }) => {
  const location = useLocation();

  if (!moviesArray || moviesArray.length === 0) {
    return;
  }

  return (
    <div className="movies-list-wrapper">
      <ul className="movies-list">
        {moviesArray.map(({ id, title, poster_path }) => (
          <li key={id} className="movies-list-item">
            <img
              className="movies-list-img"
              src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
              alt={title}
            />
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;
