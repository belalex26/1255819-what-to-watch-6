import React, {useEffect, useState} from 'react';
import {useParams, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {MAX_SIMILAR_FILMS_COUNT, AuthorizationStatus} from '../../const';
import {getMovieRatingLevel} from '../../utils';
import User from '../user/user';
import Logo from '../logo/logo';
import MyListButton from '../my-list-button/my-list-button';
import FilmOverView from '../film-over-view/film-over-view';
import FilmDetails from '../film-details/film-details';
import FilmReviews from '../film-reviews/film-reviews';
import MoviesList from '../movie-list/movie-list';
import Footer from '../footer/footer';

import {fetchFilmById, fetchFilmsList, fetchReviewsById} from '../../store/api-actions';
import {getAuthorizationStatus, getDataLoadedStatus, getFilm, getFilmLoadedStatus, getReviewsLoadedStatus} from '../../store/selectors';
import LoadingScreen from '../loading-screen/loading-screen';

import shapeOfFilm from '../../proptypes/shape-of-film';

const FilmScreen = (props) => {
  const {films, film, isDataLoaded, isFilmLoaded, isReviewsLoaded, onLoad, authorizationStatus} = props;

  const [state, setState] = useState(`Overview`);
  const showActiveClassNameIf = (text) => state === text ? `movie-nav__item movie-nav__item--active` : `movie-nav__item`;
  const handleClick = (evt) => setState(evt.target.innerText);
  const id = parseInt(useParams().id, 10);

  useEffect(() => {
    onLoad(id);
  }, [id]);

  if (!isFilmLoaded || !isReviewsLoaded || !isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  const FilmInfo = () => {
    switch (state) {
      case `Details`: {
        return <FilmDetails film={film} />;
      }
      case `Reviews`: {
        return <FilmReviews />;
      }
      default: {
        return <FilmOverView film={film} />;
      }
    }
  };

  const similarFilms = films.filter((f) => f.genre === film.genre && f.id !== film.id).slice(0, MAX_SIMILAR_FILMS_COUNT);

  return (
    <React.Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={film.backgroundImage} alt={film.name} />
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <header className="page-header movie-card__head">
            <Logo />
            <User />
          </header>
          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{film.name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{film.genre}</span>
                <span className="movie-card__year">{film.released}</span>
              </p>
              <div className="movie-card__buttons">
                <Link to={`/player/${film.id}`} type="button" className="btn btn--play movie-card__button">
                  <svg viewBox="0 0 19 19" width={19} height={19}>
                    <use xlinkHref="#play-s" />
                  </svg>
                  <span>Play</span>
                </Link>
                {authorizationStatus === AuthorizationStatus.AUTH &&
                  <MyListButton film={film} />
                }
                {authorizationStatus === AuthorizationStatus.AUTH &&
                <Link to={`/films/${id}/review`} className="btn movie-card__button">Add review</Link>
                }
              </div>
            </div>
          </div>
        </div>
        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">

              <img src={film.posterImage} alt={film.name} width={218} height={327} />
            </div>
            <div className="movie-card__desc">
              <nav className="movie-nav movie-card__nav">
                <ul className="movie-nav__list">
                  <li className={showActiveClassNameIf(`Overview`)}>
                    <Link to="#" className="movie-nav__link" onClick={handleClick}>Overview</Link>
                  </li>
                  <li className={showActiveClassNameIf(`Details`)}>
                    <Link to="#" className="movie-nav__link" onClick={handleClick}>Details</Link>
                  </li>
                  <li className={showActiveClassNameIf(`Reviews`)}>
                    <Link to="#" className="movie-nav__link" onClick={handleClick}>Reviews</Link>
                  </li>
                </ul>
              </nav>
              <div className="movie-rating">
                <div className="movie-rating__score">{film.rating}</div>
                <p className="movie-rating__meta">
                  <span className="movie-rating__level">{getMovieRatingLevel(film)}</span>
                  <span className="movie-rating__count">{film.scoresCount} ratings</span>
                </p>
              </div>
              <FilmInfo />
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <MoviesList films={similarFilms} />
        </section>
        <Footer />
      </div>
    </React.Fragment>
  );
};

FilmScreen.propTypes = {
  films: PropTypes.arrayOf(
      shapeOfFilm()
  ),
  film: shapeOfFilm(),
  onLoad: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
  isFilmLoaded: PropTypes.bool.isRequired,
  isReviewsLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  film: getFilm(state),
  isDataLoaded: getDataLoadedStatus(state),
  isFilmLoaded: getFilmLoadedStatus(state),
  isReviewsLoaded: getReviewsLoadedStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLoad(id) {
    dispatch(fetchFilmsList());
    dispatch(fetchFilmById(id));
    dispatch(fetchReviewsById(id));
  },
});

export {FilmScreen};
export default connect(mapStateToProps, mapDispatchToProps)(FilmScreen);
