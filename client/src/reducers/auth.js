import { SET_AUTH_LOADING, SET_AUTH_USER } from '../actions/types';

const initialState = {
  isAuthenticated: null,
  user: null,
  loading: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case SET_AUTH_USER: {
      return {
        ...state,
        isAuthenticated: action.payload.user ? true : false,
        user: action.payload.user,
        loading: false,
      };
    }
    default:
      return state;
  }
};

export default authReducer;
