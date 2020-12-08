import { combineReducers } from 'redux';

import authReducer from './auth';
import surveyReducer from './survey';

export default combineReducers({
  auth: authReducer,
  survey: surveyReducer,
});
