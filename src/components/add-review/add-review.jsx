import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Link, useParams} from 'react-router-dom';

import shapeOfFilm from '../../proptypes/shape-of-film';
import CommentForm from '../comment-form/comment-form';
import {fetchFilmById} from '../../store/api-actions';
import LoadingScreen from '../loading-screen/loading-screen';

const AddReview = (props) => {
  const {film, isFilmLoaded, onLoad} = props;
  const id = parseInt(useParams().id, 10);

  useEffect(() => {
    onLoad(id);
  }, []);

  if (!isFilmLoaded) {
    return (
      <LoadingScreen />
    );
  }
  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={film.previewImage} alt={film.name} />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header">
          <div className="logo">
            <Link to="/" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${id}`} className="breadcrumbs__link">{film.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>
          <div className="user-block">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width={63} height={63} />
            </div>
          </div>
        </header>
        <div className="movie-card__poster movie-card__poster--small">
          <img src={film.posterImage} alt={film.name} width={218} height={327} />
        </div>
      </div>
      <div className="add-review">
        <CommentForm />
      </div>
    </section>

  );
};

AddReview.propTypes = {
  film: PropTypes.arrayOf(
      shapeOfFilm()
  ).isRequired,
  onLoad: PropTypes.func.isRequired,
  isFilmLoaded: PropTypes.bool.isRequired,
  onLoadData: PropTypes.func.isRequired
};

const mapStateToProps = ({movies}) => ({
  film: movies.film,
  isFilmLoaded: movies.isFilmLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  onLoad(id) {
    dispatch(fetchFilmById(id));
  },
});

export {AddReview};
export default connect(mapStateToProps, mapDispatchToProps)(AddReview);
