import {ActionType} from './action';
import mockFilms from '../mocks/films';
import {promoFilm} from '../mocks/promo-film';
import {DEFAULT_GENRE} from '../const';

const initialState = {
  activeGenre: DEFAULT_GENRE,
  films: mockFilms,
  promo: promoFilm,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        activeGenre: action.payload,
      };

    case ActionType.RESET_GENRE:
      return {
        ...state,
        activeGenre: DEFAULT_GENRE,
      };
  }
  return state;
};

export {reducer};
