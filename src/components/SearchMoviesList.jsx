import React from 'react';
import { Link } from 'react-router-dom';

const SearchMoviesList = ({ visibleMovies, location }) => {
  return (
    <ul className="trends-list">
      {visibleMovies.map(({ id, title, poster_path }) => (
        <li key={id} className="trends-list-item">
          <img
            className="trends-list-img"
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                : 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700'
            }
            alt={title}
            style={{ marginBottom: 10 }}
          />
          <Link to={`${id}`} state={location}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SearchMoviesList;
