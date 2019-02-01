import { AUTH_SUCCESS } from '../actions/auth';

export const initialState = {
  loggedIn: false,
  user: null,
  submitting: false,
  error: null
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return Object.assign({}, state, {
        loggedIn: true
      });

    default:
      return state;
  }
};
