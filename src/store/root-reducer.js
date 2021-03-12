import {combineReducers} from 'redux';
import {errorReducer, reducer} from './reducer';

export const NameSpace = {
  FILMS: `movies`,
  ERRORS: `errors`,
};

export default combineReducers({
  [NameSpace.FILMS]: reducer,
  [NameSpace.ERRORS]: errorReducer,
});
