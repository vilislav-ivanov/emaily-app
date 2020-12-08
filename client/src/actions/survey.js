import axios from 'axios';

import {
  SET_AUTH_USER,
  SET_AUTH_LOADING,
  SET_ALL_SURVEYS,
  LOADING_SURVEY,
} from './types';

export const createSurvey = (
  { title, body, subject, recipients },
  history
) => async (dispatch) => {
  dispatch({ type: SET_AUTH_LOADING });

  try {
    const response = await axios.post('/api/survey', {
      title,
      body,
      subject,
      recipients,
    });

    dispatch({
      type: SET_AUTH_USER,
      payload: response.data,
    });

    history.push('/');
  } catch (error) {
    dispatch({
      type: SET_AUTH_USER,
      payload: {},
    });
    console.log(error);
  }
};

export const getSurveys = () => async (dispatch) => {
  dispatch({
    type: LOADING_SURVEY,
  });

  try {
    const response = await axios.get('/api/survey');

    dispatch({
      type: SET_ALL_SURVEYS,
      payload: response.data.surveys,
    });
  } catch (error) {
    dispatch({
      type: SET_ALL_SURVEYS,
      payload: [],
    });
    console.log(error);
  }
};
