import {ActionType} from '../action';
import browserHistory from '../../browser-history';
import {ApiRoute} from '../../const';

const errorInitialState = {
  error: null,
  errorMessage: null,
};

const errorReducer = (state = errorInitialState, action) => {
  switch (action.type) {
    case ActionType.FETCH_FILM_BY_ID_ERROR:
      browserHistory.push(ApiRoute.ERROR_404);
      return state;
  }

  if (!action.payload) {
    return state;
  }

  const {error} = action.payload;

  if (error) {
    return {
      ...state,
      error,
      errorMessage: error.message,
    };
  } else {
    return {
      ...state,
      error: null,
      errorMessage: null,
    };
  }
};

export {errorReducer};
