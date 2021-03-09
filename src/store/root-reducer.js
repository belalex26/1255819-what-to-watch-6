import {combineReducers} from 'redux';
import {errorReducer, reducer} from './reducer';

export const NameSpace = {
  FILMS: `FILMS`,
  ERRORS: `ERRORS`,
};

export default combineReducers({
  [NameSpace.FILMS]: reducer,
  [NameSpace.ERRORS]: errorReducer,
});
