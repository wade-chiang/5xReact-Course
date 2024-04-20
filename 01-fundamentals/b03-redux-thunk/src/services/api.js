/* eslint-disable import/prefer-default-export */
/**
 * Mocking client-server processing
 */

export function fetchUserInfo() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: 'milkmidi',
        age: 18,
      });
    }, 1500);
  });
}

export function updateUserInfo(userInfo) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(userInfo);
    }, 1500);
  });
}
