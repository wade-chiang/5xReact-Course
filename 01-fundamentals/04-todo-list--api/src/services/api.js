import axios from 'axios';

const apiURL = '/api/todolist/這裡要換上你的英文字名';

export const fetchTodo = () => {
  return axios(apiURL).then(({ data }) => data);
};

export const addTodo = (text) => {
  return axios(apiURL, {
    method: 'POST',
    data: { text },
  }).then(({ data }) => data);
};

export const toggleTodo = (id) => {
  return axios({
    method: 'PUT',
    url: apiURL,
    data: { id },
  }).then(({ data }) => data);
};

export const deleteTodo = (id) => {
  return axios({
    method: 'DELETE',
    url: apiURL,
    data: { id },
  }).then(({ data }) => data);
};
