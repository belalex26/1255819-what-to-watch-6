import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import shapeOfFilm from '../../proptypes/shape-of-film';
import shapeOfPromoFilm from '../../proptypes/shape-of-promo-film';
import MovieList from '../movie-list/movie-list';
import GenreList from '../genre-list/genre-list';
import ShowMoreBtn from '../show-more-btn/show-more-btn';
import {getVisibleFilms} from '../../selectors';
import {ActionCreator} from '../../store/action';

const MainScreen = (props) => {
  const {promo, visibleFilms, onLoad} = props;

  useEffect(() => {
    onLoad();
  }, []);

  return (
    <React.Fragment>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
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

          <div className="user-block">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </div>
        </header>

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{promo.title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{promo.genre}</span>
                <span className="movie-card__year">{promo.released}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">

          <GenreList />
          <MovieList visibleFilms={visibleFilms} />

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
  visibleFilms: PropTypes.arrayOf(
      shapeOfFilm()
  ).isRequired,
  promo: shapeOfPromoFilm().isRequired,
  onLoad: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  visibleFilms: getVisibleFilms(state),
  promo: state.promo,
});

const mapDispatchToProps = (dispatch) => ({
  onLoad() {
    dispatch(ActionCreator.resetVisibleFilmsCount());
  },
});

export {MainScreen};
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
