import { SET_ALL_SURVEYS, LOADING_SURVEY } from '../actions/types';

const initialState = {
  survey: null,
  surveys: [],
  loading: false,
};

const surveyReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALL_SURVEYS: {
      return {
        ...state,
        surveys: action.payload,
        loading: false,
      };
    }
    case LOADING_SURVEY: {
      return {
        ...state,
        loading: true,
      };
    }

    default:
      return state;
  }
};

export default surveyReducer;
