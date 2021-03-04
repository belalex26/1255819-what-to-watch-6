import React, {useState} from 'react';
import {useParams, Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import shapeOfFilm from '../../proptypes/shape-of-film';
import FilmOverView from '../film-over-view/film-over-view';
import FilmDetails from '../film-details/film-details';
import FilmReviews from '../film-reviews/film-reviews';
import comments from '../../mocks/comments';

const FilmScreen = (props) => {
  const {films} = props;
  const [state, setState] = useState(`Overview`);
  const showActiveClassNameIf = (text) => state === text ? `movie-nav__item movie-nav__item--active` : `movie-nav__item`;
  const handleClick = (evt) => setState(evt.target.innerText);
  const id = parseInt(useParams().id, 10);
  const film = films.find((currentFilm) => currentFilm.id === id);

  const FilmInfo = () => {
    switch (state) {
      case `Details`: {
        return <FilmDetails films={films} />;
      }
      case `Reviews`: {
        return <FilmReviews comments={comments} />;
      }
      default: {
        return <FilmOverView films={films} />;
      }
    }
  };

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__hero">
        <div className="movie-card__bg">
          <img src={film.backgroundImage} alt={film.name} />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header movie-card__head">
          <div className="logo">
            <Link to="/" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>
          <div className="user-block">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width={63} height={63} />
            </div>
          </div>
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
                  <use xlinkto="#play-s" />
                </svg>
                <span>Play</span>
                </Link>
              <button className="btn btn--list movie-card__button" type="button">
                <svg viewBox="0 0 19 20" width={19} height={20}>
                  <use xlinkto="#add" />
                </svg>
                <span>My list</span>
              </button>
              <Link to={`/films/${id}/review`} className="btn movie-card__button">Add review</Link>
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
                <span className="movie-rating__level">Very good</span>
                <span className="movie-rating__count">240 ratings</span>
              </p>
            </div>
            <FilmInfo />
          </div>
        </div>
      </div>
    </section>
  );
};

FilmScreen.propTypes = PropTypes.arrayOf(
    shapeOfFilm()
).isRequired;

export default FilmScreen;
