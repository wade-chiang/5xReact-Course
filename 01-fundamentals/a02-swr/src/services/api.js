/**
 * @typedef TodoType
 * @prop {number} number
 * @prop {string} title
 * @prop {boolean} completed
 */

/**
 * @returns {Promise<TodoType[]>}
 */
export const fetchTodoWithId = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then((res) =>
    res.json(),
  );
};

/**
 *
 * @returns {Promise<{name: string, date: number}>}
 */
export const fetchUserData = () => {
  console.log('fetchUserData');
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: 'milkmidi', date: Date.now() });
    }, 1000);
  });
};
