import { useState, useEffect } from 'react';
import { fetchTodoWithId } from '../services/api';

const Example1 = () => {
  const [loading, setLoading] = useState(false);
  const [todo, setTodo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetchTodoWithId(1)
      .then((result) => {
        setTodo(result);
        setError(null);
      })
      .catch((err) => {
        setError(err);
        setTodo(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <section data-name="Example1">
      <h2>loading:{`${loading}`}</h2>
      <div className="my-code">
        <pre>{JSON.stringify(todo, null, 2)}</pre>
      </div>
    </section>
  );
};

export default Example1;
