import {viewReducer} from './view-reducer';
import {ActionType} from '../action';
import {DEFAULT_GENRE, DEFAULT_VISIBLE_FILMS_COUNT} from '../../const';

describe(`View-Reducer`, () => {
  it(`without additional parameters should return initial state`, () => {
    const initialState = {
      activeGenre: DEFAULT_GENRE,
      visibleFilmsCount: DEFAULT_VISIBLE_FILMS_COUNT,
      isReviewFormDisabled: false,
    };
    expect(viewReducer(undefined, {}))
      .toEqual(initialState);
  });

  it(`should change activeGenre by a given value`, () => {
    const state = {
      activeGenre: DEFAULT_GENRE,
      otherFiled: `shouldNotChange`,
    };
    const changeGenreAction = {
      type: ActionType.CHANGE_GENRE,
      payload: `someGenre`,
    };

    expect(viewReducer(state, changeGenreAction))
      .toEqual({activeGenre: `someGenre`, otherFiled: `shouldNotChange`});
  });
  it(`should increase visibleFilmsCount by a constant value`, () => {
    const state = {
      visibleFilmsCount: DEFAULT_VISIBLE_FILMS_COUNT,
      otherFiled: `shouldNotChange`,
    };
    const increaseVisibleFilmsCountAction = {
      type: ActionType.INCREASE_VISIBLE_FILMS_COUNT,
    };

    expect(viewReducer(state, increaseVisibleFilmsCountAction))
      .toEqual({visibleFilmsCount: state.visibleFilmsCount + DEFAULT_VISIBLE_FILMS_COUNT, otherFiled: `shouldNotChange`});
  });
  it(`should reset activeGenre to a default value`, () => {
    const state = {
      activeGenre: `someGenre`,
      otherFiled: `shouldNotChange`,
    };
    const resetGenreAction = {
      type: ActionType.RESET_GENRE,
    };

    expect(viewReducer(state, resetGenreAction))
      .toEqual({activeGenre: DEFAULT_GENRE, otherFiled: `shouldNotChange`});
  });

  it(`should reset visibleFilmsCount to a default value`, () => {
    const state = {
      visibleFilmsCount: 23,
      otherFiled: `shouldNotChange`,
    };
    const resetVisibleFilmsCountAction = {
      type: ActionType.RESET_VISIBLE_FILMS_COUNT,
    };

    expect(viewReducer(state, resetVisibleFilmsCountAction))
      .toEqual({visibleFilmsCount: DEFAULT_VISIBLE_FILMS_COUNT, otherFiled: `shouldNotChange`});
  });
  it(`should change isReviewFormDisabled status by a given value`, () => {
    const state = {
      isReviewFormDisabled: false,
      otherFiled: `shouldNotChange`,
    };
    const isDisabled = true;
    const setIsReviewFormDisabledAction = {
      type: ActionType.SET_IS_REVIEW_FORM_DISABLED,
      payload: isDisabled,
    };

    expect(viewReducer(state, setIsReviewFormDisabledAction))
      .toEqual({isReviewFormDisabled: isDisabled, otherFiled: `shouldNotChange`});
  });
});
