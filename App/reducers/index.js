import { combineReducers } from 'redux';

import AuthReducer from './AuthReducer';
import SaveDateReducer from './SaveDateReducer';
import GetDataReducer from './GetDataReducer';

export default combineReducers({
  auth: AuthReducer,
  saveDate: SaveDateReducer,
  getDatastore:GetDataReducer
});
