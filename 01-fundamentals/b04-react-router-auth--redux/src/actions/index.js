import { apiLogin } from '../services/api';

export const actionLoading = (loading) => {
  return {
    type: 'LOADING',
    payload: loading,
  };
};

export const actionLogin = (email, password) => {
  return (dispatch) => {
    dispatch(actionLoading(true));
    return apiLogin(email, password)
      .then((result) => {
        dispatch({
          type: 'LOGIN',
          payload: result.user,
        });
      })
      .finally(() => {
        dispatch(actionLoading(false));
      });
  };
};
