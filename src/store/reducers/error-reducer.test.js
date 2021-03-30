import {errorReducer} from './error-reducer';
import {ActionType} from '../action';

describe(`Error-Reducer`, () => {
  it(`without additional parameters should return initial state`, () => {
    const initialState = {
      error: null,
      errorMessage: null,
    };
    expect(errorReducer(undefined, {}))
      .toEqual(initialState);
  });

  it(`should update state by a given value`, () => {
    const state = {
      error: null,
      errorMessage: null,
    };
    const error = {
      message: `something went wrong`,
    };
    const fetchPromoFilmErrorAction = {
      type: ActionType.FETCH_PROMO_FILM_ERROR,
      payload: {error},
    };

    expect(errorReducer(state, fetchPromoFilmErrorAction))
      .toEqual({error, errorMessage: `something went wrong`});
  });
});
