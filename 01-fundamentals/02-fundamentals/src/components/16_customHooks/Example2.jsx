import { useState } from 'react';
import useFetchTodo from './hooks/useFetchTodo';

// FIXME
const Example2 = () => {
  const [idx, setIdx] = useState(0);
  const { isLoading, data } = useFetchTodo(idx);
  if (isLoading) {
    return <div>Loading</div>;
  }
  return (
    <section data-name="Example1">
      <button className="my-btn" onClick={() => setIdx(idx + 1)}>
        Next
      </button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </section>
  );
};

export default Example2;
