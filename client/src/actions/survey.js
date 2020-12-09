import axios from 'axios';

import {
  SET_AUTH_USER,
  SET_AUTH_LOADING,
  SET_ALL_SURVEYS,
  SET_SINGLE_SURVEY,
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

export const getSingleSurvey = (surveyId) => async (dispatch) => {
  dispatch({
    type: LOADING_SURVEY,
  });

  try {
    const response = await axios.get('/api/survey/' + surveyId);
    dispatch({
      type: SET_SINGLE_SURVEY,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: SET_SINGLE_SURVEY,
      payload: {},
    });
  }
};

export const activateSurvey = (id) => async (dispatch) => {
  dispatch({
    type: LOADING_SURVEY,
  });

  try {
    const response = await axios.post('/api/survey/activate/' + id);

    dispatch({
      type: SET_ALL_SURVEYS,
      payload: response.data.surveys
    })
  } catch (error) {
    dispatch({
      type: SET_ALL_SURVEYS,
      payload: [],
    });
  }
}

export const deleteSurvey = (id) => async (dispatch) => {
  dispatch({
    type: LOADING_SURVEY,
  });

  try {
    const response = await axios.delete('/api/survey/' + id);

    dispatch({
      type: SET_ALL_SURVEYS,
      payload: response.data.surveys
    })
  } catch (error) {
    dispatch({
      type: SET_ALL_SURVEYS,
      payload: [],
    });
  }
}
