import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  let { id } = useParams();

  const [cast, setCast] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      url: `https://api.themoviedb.org/3/movie/${id}/credits`,
      params: { language: 'en-US' },
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MDg3N2Q0NWI2ZTQ2NDU3MzJiMzM4ZmQ1MDY5ZmMyYyIsInN1YiI6IjY1ODQyYWNmY2E4MzU0NDE1NmQ3N2Y5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xk1Kciqlp7TV4RTr51i1EFwzQ98SxCY_Z1j0emz2etM',
      },
    };
    const fetchCast = async () => {
      try {
        const {
          data: { cast },
        } = await axios.request(options);
        setCast(cast);
      } catch (error) {
        console.error('Error with getting cast', error);
      }
    };

    fetchCast();
  }, [id]);

  return (
    <div className="cast-wrapper">
      <ul className="cast-list">
        {cast.map(cas => {
          return (
            <li key={cas.id} className="cast-item">
              {cas.profile_path ? (
                <img
                  className="cast-img"
                  src={`https://image.tmdb.org/t/p/w500/${cas.profile_path}`}
                  alt={cas.name}
                ></img>
              ) : (
                <h1>No photo</h1>
              )}
              <p className="cast-header">Real name: {cas.name}</p>
              <p className="cast-header">Character: {cas.character}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Cast;
