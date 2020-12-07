import axios from 'axios';

import { SET_AUTH_USER, SET_AUTH_LOADING } from './types';

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
    console.log(error);
  }
};
