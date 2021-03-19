import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Link, useParams} from 'react-router-dom';

import CommentForm from '../comment-form/comment-form';
import {fetchFilmById} from '../../store/api-actions';
import LoadingScreen from '../loading-screen/loading-screen';
import Logo from '../logo/logo';
import User from '../user/user';
import {getFilm, getFilmLoadedStatus} from '../../store/selectors';

import shapeOfFilm from '../../proptypes/shape-of-film';

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
          <Logo />
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
          <User />

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
  film: shapeOfFilm().isRequired,
  onLoad: PropTypes.func.isRequired,
  isFilmLoaded: PropTypes.bool.isRequired,
  onLoadData: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  film: getFilm(state),
  isFilmLoaded: getFilmLoadedStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLoad(id) {
    dispatch(fetchFilmById(id));
  },
});
export {AddReview};
export default connect(mapStateToProps, mapDispatchToProps)(AddReview);
