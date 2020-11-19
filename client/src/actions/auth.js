import axios from 'axios';

import { SET_AUTH_USER, SET_AUTH_LOADING } from './types';

export const setAuthUser = () => async (dispatch) => {
  dispatch({ type: SET_AUTH_LOADING });

  try {
    const res = await axios.get('/auth/current_user');

    dispatch({
      type: SET_AUTH_USER,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const proceedStripeBilling = (token, creditsAmount) => async (
  dispatch
) => {
  dispatch({ type: SET_AUTH_LOADING });

  try {
    const res = await axios.post('/api/billing', { token, creditsAmount });

    dispatch({
      type: SET_AUTH_USER,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
