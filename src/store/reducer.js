import {CHANGE_GENRE} from './action';
import mockFilms from './mocks/films';

const initialState = {
  genre: null,
  mockFilms
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_GENRE:
      return {...state, genre: action.payload};
    default: return state;
  }
};

export default reducer;
