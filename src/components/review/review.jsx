import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

import shapeOfComment from '../../proptypes/shape-of-comment';

const Review = (props) => {

  const {comment} = props;

  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {
          comment.map((review) => (
            <div key={review.id} className="review">
              <blockquote className="review__quote">
                <p className="review__text">{review.comment}</p>
                <footer className="review__details">
                  <cite className="review__author">{review.user.name}</cite>
                  <time className="review__date" dateTime={review.date}>{`${dayjs(review.date).format(`MMMM D, YYYY`)}`}</time>
                </footer>
              </blockquote>
              <div className="review__rating">{review.rating}</div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

Review.propTypes = {
  comment: PropTypes.arrayOf(
      shapeOfComment()
  ).isRequired
};

export default Review;
