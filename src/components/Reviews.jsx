import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  let { id } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      url: `https://api.themoviedb.org/3/movie/${id}/reviews`,
      params: { language: 'en-US' },
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MDg3N2Q0NWI2ZTQ2NDU3MzJiMzM4ZmQ1MDY5ZmMyYyIsInN1YiI6IjY1ODQyYWNmY2E4MzU0NDE1NmQ3N2Y5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xk1Kciqlp7TV4RTr51i1EFwzQ98SxCY_Z1j0emz2etM',
      },
    };
    const fetchReviews = async () => {
      try {
        const {
          data: { results },
        } = await axios.request(options);
        setReviews(results);
      } catch (error) {
        console.error('Error with getting reviews', error);
      }
    };

    fetchReviews();
  }, [id]);

  return (
    <ul className="review-list">
      {reviews.length === 0 ? (
        <div
          style={{
            textAlign: 'center',
            marginTop: 20,
            fontSize: 40,
            marginBottom: 20,
          }}
        >
          {' '}
          No reviews before
        </div>
      ) : (
        reviews.map(review => {
          const { author_details, content } = review;
          const { rating, username } = author_details;
          return (
            <li key={username} className="review-item">
              <div className="review-user-wrapper">
                <p className="review-text">
                  {' '}
                  Author: <span className="review-span"> {username}</span>
                </p>
                <p className="review-text">
                  {' '}
                  Rating:{' '}
                  <span className="review-span">
                    {' '}
                    {rating ? rating : 'no rating'}
                  </span>
                </p>
              </div>
              <p>{content}</p>
            </li>
          );
        })
      )}
    </ul>
  );
};
export default Reviews;
