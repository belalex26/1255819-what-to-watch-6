import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

import genres from '../genres/genres';
import {CHANGE_GENRE} from "../../store/action";

const GenreList = ({genre, changeGenre}) => {
  const handleClick = (value, event) => {
    event.preventDefault();
    changeGenre(value);
  };

  return (
    <Fragment>
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <ul className="catalog__genres-list">
        {
          genres.map((item) => (
            <li
              className={`catalog__genres-item ${genre === item.value && `catalog__genres-item--active`}`}
              key={`$key-genre-${item.title}`}
            >
              <a
                href="#"
                className="catalog__genres-link"
                onClick={handleClick.bind(undefined, item.value)}
              >
                {item.title}
              </a>
            </li>
          ))
        }
      </ul>
    </Fragment>
  );
};

GenreList.propTypes = {
  genre: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null]).isRequired]),
  changeGenre: PropTypes.func.isRequired
};

const stateToProps = (state) => ({genre: state.genre});
const dispatchToProps = (dispatch) => {
  return {
    changeGenre: (value) => dispatch({type: CHANGE_GENRE, payload: value}),
  };
};

export default connect(stateToProps, dispatchToProps)(GenreList);
