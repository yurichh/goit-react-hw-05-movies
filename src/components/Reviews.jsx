import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import reviewService from 'services/reviewService';

const Reviews = () => {
  let { id } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    reviewService(id).then(resp => {
      setReviews(resp);
    });
  }, [id]);

  return (
    <ul className="review-list">
      {reviews.length === 0 ? (
        <div
          style={{
            textAlign: 'center',
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
