import { AUTH_SUCCESS, AUTH_SUBMIT, AUTH_ERROR } from '../actions/auth';

export const initialState = {
  loggedIn: false,
  user: null,
  submitting: false,
  error: null
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SUBMIT:
      return Object.assign({}, state, {
        submitting: true
      });
    case AUTH_SUCCESS:
      return Object.assign({}, state, {
        loggedIn: true,
        user: action.payload
      });
    case AUTH_ERROR:
      return Object.assign({}, state, {
        submitting: false,
        error: action.payload
      });
    default:
      return state;
  }
};
