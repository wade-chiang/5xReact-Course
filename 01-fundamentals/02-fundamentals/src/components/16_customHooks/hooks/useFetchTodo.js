import { useState, useEffect } from 'react';

const useFetchTodo = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  //* // TODO
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((res) => res.json())
      .then((res) => {
        setLoading(false);
        setData(res);
      });
  }, []);

  return { isLoading, data };
};

export default useFetchTodo;
