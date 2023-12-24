import { Link, useLocation } from 'react-router-dom';

const MoviesList = ({ moviesArray }) => {
  const location = useLocation();

  return (
    <div className="movies-list-wrapper">
      <ul className="movies-list">
        {moviesArray.map(({ id, title, poster_path }) => (
          <li key={id} className="movies-list-item">
            <Link
              to={`/movies/${id}`}
              state={{ from: location }}
              className="movies-list-link"
            >
              <img
                className="movies-list-img"
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                    : 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700'
                }
                alt={title}
              />
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;
