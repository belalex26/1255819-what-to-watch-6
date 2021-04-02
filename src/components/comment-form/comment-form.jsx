import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {commentPost} from '../../store/api-actions';
import shapeOfFilm from '../../proptypes/shape-of-film';
import {getErrorMessage, getFilm, getReviewFormDisabledStatus} from '../../store/selectors';

const RATINGS_COUNT = 10;
const MIN_REVIEW_LENGTH = 5;
const MAX_REVIEW_LENGTH = 400;

const CommentForm = (props) => {
  const {film, onReviewSubmit, errorMessage, isReviewFormDisabled} = props;

  const [review, setReview] = useState({
    rating: 0,
    comment: ``,
  });

  let [isPostDisabled, setIsPostDisabled] = useState(true);

  useEffect(() => {
    if (review.rating === 0 || review.comment.length < MIN_REVIEW_LENGTH || review.comment.length > MAX_REVIEW_LENGTH) {
      setIsPostDisabled(true);
    } else {
      setIsPostDisabled(false);
    }
  }, [review.rating, review.comment]);

  const setRating = (evt) => setReview({...review, rating: evt.target.value});
  const setComment = (evt) => setReview({...review, comment: evt.target.value});

  const handleReviewSubmit = (evt) => {
    evt.preventDefault();
    onReviewSubmit(film.id, review.rating, review.comment);
  };

  const ratingValues = Array.from({length: RATINGS_COUNT}, (_, i) => i + 1);

  return (
    <form action="#" className="add-review__form" onSubmit={handleReviewSubmit} data-testid="add-review_form">
      <div className="rating">
        <div className="rating__stars" onChange={setRating}>
          {
            ratingValues.map((value) => (
              <React.Fragment key={`star-${value}`}>
                <input className="rating__input" id={`star-${value}`} type="radio" name="rating" value={value} disabled={isReviewFormDisabled} data-testid="rating"/>
                <label className="rating__label" htmlFor={`star-${value}`}>Rating {value}</label>
              </React.Fragment>
            ))
          }
        </div>
      </div>
      <div className="add-review__text">
        <textarea disabled={isReviewFormDisabled} className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" onChange={setComment} minLength={MIN_REVIEW_LENGTH} maxLength={MAX_REVIEW_LENGTH} data-testid="add-review_textarea" required/>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit" disabled={isPostDisabled || isReviewFormDisabled}>Post</button>
        </div>
      </div>
      {errorMessage && `${errorMessage}`}
    </form>
  );
};

CommentForm.propTypes = {
  film: shapeOfFilm(),
  onReviewSubmit: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
  isReviewFormDisabled: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  film: getFilm(state),
  errorMessage: getErrorMessage(state),
  isReviewFormDisabled: getReviewFormDisabledStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onReviewSubmit(id, rating, comment) {
    dispatch(commentPost(id, rating, comment));
  },
});

export {CommentForm};
export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
