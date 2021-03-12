import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {ActionCreator} from '../../store/action';
import {getAllFilmsByGenre} from '../../selectors';

import shapeOfFilm from '../../proptypes/shape-of-film';

const ShowMoreBtn = (props) => {
  const {visibleFilmsCount, allFilms, onButtonClick} = props;

  const handleButtonClick = () => {
    onButtonClick();
  };

  const isHidden = visibleFilmsCount >= allFilms.length;

  return (
    <button onClick={handleButtonClick} className={`${isHidden ? `visually-hidden` : `catalog__button`}`} type="button">Show more</button>
  );
};

ShowMoreBtn.propTypes = {
  allFilms: PropTypes.arrayOf(
      shapeOfFilm()
  ).isRequired,
  visibleFilmsCount: PropTypes.number.isRequired,
  onButtonClick: PropTypes.func.isRequired
};

const mapStateToProps = ({movies}) => ({
  allFilms: getAllFilmsByGenre(movies),
  visibleFilmsCount: movies.visibleFilmsCount,
});

const mapDispatchToProps = (dispatch) => ({
  onButtonClick() {
    dispatch(ActionCreator.increaseVisibleFilmsCount());
  },
});

export {ShowMoreBtn};
export default connect(mapStateToProps, mapDispatchToProps)(ShowMoreBtn);
