import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { castService } from '../services/moviesServices';

const Cast = () => {
  let { id } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    castService(id).then(resp => {
      setCast(resp);
    });
  }, [id]);

  return (
    <>
      {cast.length === 0 ? (
        <div
          style={{
            textAlign: 'center',
            fontSize: 40,
            marginBottom: 20,
          }}
        >
          {' '}
          No cast here
        </div>
      ) : (
        <ul className="cast-list">
          {cast.map(cas => {
            return (
              <li key={cas.id} className="cast-item">
                <img
                  className="cast-img"
                  src={
                    cas.profile_path
                      ? `https://image.tmdb.org/t/p/w500/${cas.profile_path}`
                      : 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700'
                  }
                  alt={cas.name}
                ></img>
                <p className="cast-header">Real name: {cas.name}</p>
                <p className="cast-header">Character: {cas.character}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};
export default Cast;
