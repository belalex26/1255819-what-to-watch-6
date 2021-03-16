import React from 'react';
import Review from '../review/review';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import shapeOfComment from '../../proptypes/shape-of-comment';


const FilmReviews = ({reviews}) => {
  const leftComments = reviews.slice(0, Math.round(reviews.length / 2));
  const rightComments = reviews.slice(leftComments.length);
  const LeftColumn = () => {
    return (
      <div className="movie-card__reviews-col">
        {leftComments.map((comment, i) => <Review comment={reviews} key={`L${i}`}/>)}
      </div>
    );
  };

  const RightColumn = () => {
    return (
      <div className="movie-card__reviews-col">
        {rightComments.map((comment, i) => <Review comment={reviews} key={`R${i}`}/>)}
      </div>
    );
  };

  return (
    <div className="movie-card__reviews movie-card__row">
      <LeftColumn />
      <RightColumn />
    </div>
  );
};

FilmReviews.propTypes = {
  reviews: PropTypes.arrayOf(
      shapeOfComment()
  ).isRequired
};


const mapStateToProps = ({movies}) => ({
  reviews: movies.reviews,
});


export {FilmReviews};
export default connect(mapStateToProps, null)(FilmReviews);
