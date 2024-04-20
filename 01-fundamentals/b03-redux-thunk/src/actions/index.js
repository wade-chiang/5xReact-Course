import {
  fetchUserInfo as fetchUserInfoAPI,
  updateUserInfo as updateUserInfoAPI,
} from '../services/api';

export const INCREASE = 'INCREASE';
export const DECREASE = 'DECREASE';
export const UPDATE_USER_INFO = 'UPDATE_USER_INFO';
export const LOADING = 'LOADING';

export function actionIncrease() {
  return {
    type: INCREASE,
  };
}

export function actionDecrease() {
  return {
    type: DECREASE,
  };
}

// TODO private function
const actionUpdateUserInfo = (data) => ({
  type: UPDATE_USER_INFO,
  data,
});
const changeLoading = (isLoading) => ({
  type: LOADING,
  isLoading,
});

// TODO
export const fetchUserInfo = () => {
  console.log('fetchUserInfo');
  return (dispatch, getState) => {
    dispatch(changeLoading(true));
    fetchUserInfoAPI().then((userInfo) => {
      dispatch(actionUpdateUserInfo(userInfo));
      dispatch(changeLoading(false));
    });
  };
};

// TODO
export const updateUserInfo = (data) => {
  console.log('updateUserInfo');
  return async (dispatch, getState) => {
    dispatch(changeLoading(true));
    const userInfo = await updateUserInfoAPI(data);
    dispatch(actionUpdateUserInfo(userInfo));
    dispatch(changeLoading(false));
  };
};
