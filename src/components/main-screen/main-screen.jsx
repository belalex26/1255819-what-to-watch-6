import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";

import User from '../user/user';
import LoadingScreen from '../loading-screen/loading-screen';
import MovieList from '../movie-list/movie-list';
import GenreList from '../genre-list/genre-list';
import MyListButton from '../my-list-button/my-list-button';
import ShowMoreBtn from '../show-more-btn/show-more-btn';
import {AuthorizationStatus} from '../../const';

import {getErrorMessage, getAuthorizationStatus, getDataLoadedStatus, getFilmsListLoadingStatus, getPromo, getPromoLoadedStatus, getPromoLoadingStatus, getVisibleFilms} from '../../store/selectors';
import {ActionCreator} from '../../store/action';
import {fetchFilmsList, fetchPromoFilm} from '../../store/api-actions';

import shapeOfFilm from '../../proptypes/shape-of-film';

const MainScreen = (props) => {
  const {authorizationStatus, promo, films, onLoad, isDataLoaded, isFilmsListLoading, isPromoLoaded, isPromoLoading, loadFilmsList, loadPromoFilm, errorMessage} = props;

  useEffect(() => {
    onLoad();
  }, []);

  useEffect(() => {
    if (!isPromoLoaded && !isPromoLoading) {
      loadPromoFilm();
    }
    if (!isDataLoaded && !isFilmsListLoading) {
      loadFilmsList();
    }
  }, [isDataLoaded, isPromoLoaded, isFilmsListLoading, isPromoLoading]);

  if (!isDataLoaded || !isPromoLoaded) {
    if (!errorMessage) {
      return (
        <LoadingScreen />
      );
    }
  }

  return (
    <React.Fragment>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={promo.backgroundImage} alt={promo.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <div className="logo">
            <a className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>
          <User />
        </header>

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src={promo.posterImage} alt={`${promo.name} poster`} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{promo.name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{promo.genre}</span>
                <span className="movie-card__year">{promo.released}</span>
              </p>

              <div className="movie-card__buttons">
                <Link to={`/player/${promo.id}`} role="button" className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width={19} height={19}>
                    <use xlinkHref="#play-s" />
                  </svg>
                  <span>Play</span>
                </Link>
                {authorizationStatus === AuthorizationStatus.AUTH &&
                  <MyListButton film={promo} />
                }
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">

          <GenreList />
          <MovieList films={films} />

          <div className="catalog__more">
            <ShowMoreBtn />
          </div>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
};

MainScreen.propTypes = {
  films: PropTypes.arrayOf(
      shapeOfFilm()
  ),
  promo: shapeOfFilm(),
  authorizationStatus: PropTypes.string.isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
  isFilmsListLoading: PropTypes.bool.isRequired,
  isPromoLoaded: PropTypes.bool.isRequired,
  isPromoLoading: PropTypes.bool.isRequired,
  onLoad: PropTypes.func.isRequired,
  loadFilmsList: PropTypes.func.isRequired,
  loadPromoFilm: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  isDataLoaded: getDataLoadedStatus(state),
  isPromoLoaded: getPromoLoadedStatus(state),
  isFilmsListLoading: getFilmsListLoadingStatus(state),
  isPromoLoading: getPromoLoadingStatus(state),
  promo: getPromo(state),
  films: getVisibleFilms(state),
  errorMessage: getErrorMessage(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLoad() {
    dispatch(ActionCreator.resetVisibleFilmsCount());
  },
  loadFilmsList() {
    dispatch(fetchFilmsList());
  },
  loadPromoFilm() {
    dispatch(fetchPromoFilm());
  }
});

export {MainScreen};
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
