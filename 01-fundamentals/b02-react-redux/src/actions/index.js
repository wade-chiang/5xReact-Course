export const INCREASE = 'INCREASE';
export const DECREASE = 'DECREASE';
export const UPDATE_USER_INFO = 'UPDATE_USER_INFO';

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

export const actionUpdateUserInfo = (data) => {
  return {
    type: UPDATE_USER_INFO,
    payload: data,
  };
};
