import React from 'react';
import Review from '../review/review';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import shapeOfComment from '../../proptypes/shape-of-comment';
import {getFilm, getReviews} from '../../store/selectors';


const FilmReviews = ({reviews}) => {
  return (
    <Review comment={reviews} />
  );
};

FilmReviews.propTypes = {
  reviews: PropTypes.arrayOf(
      shapeOfComment()
  ).isRequired
};


const mapStateToProps = (state) => ({
  film: getFilm(state),
  reviews: getReviews(state)
});

export {FilmReviews};
export default connect(mapStateToProps, null)(FilmReviews);
