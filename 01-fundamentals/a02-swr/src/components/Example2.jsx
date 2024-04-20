import { useState } from 'react';
import useSWR from 'swr';
import { fetchTodoWithId } from '../services/api';

const Example2 = () => {
  const [todoIndex, setTodoIndex] = useState(10);

  // TODO
  // https://swr.vercel.app/docs/options
  const { data, error } = useSWR(`/api/todos/${todoIndex}`, () =>
    fetchTodoWithId(todoIndex),
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <div className="my-spinner" />;

  return (
    <section data-name="Example2">
      <button
        className="my-btn"
        onClick={() => setTodoIndex((prev) => prev - 1)}
      >
        prev
      </button>
      <button
        className="my-btn"
        onClick={() => setTodoIndex((prev) => prev + 1)}
      >
        next
      </button>
      <div className="my-code">
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </section>
  );
};

export default Example2;
