import { combineReducers } from 'redux';
import { loginReducer } from './auth';
import { reducer as formReducer } from 'redux-form';
const rootReducer = combineReducers({
  loginReducer,
  form: formReducer
});

export default rootReducer;
