import {combineReducers} from 'redux';

import {viewReducer} from './reducers/view-reducer';
import {errorReducer} from './reducers/error-reducer';
import {dataReducer} from './reducers/data-reducer';

export const NameSpace = {
  FILMS: `FILMS`,
  ERRORS: `ERRORS`,
  VIEW: `VIEW`,
};

export default combineReducers({
  [NameSpace.FILMS]: dataReducer,
  [NameSpace.ERRORS]: errorReducer,
  [NameSpace.VIEW]: viewReducer,
});
