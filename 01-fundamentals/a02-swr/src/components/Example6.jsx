import { useEffect, useState, useMemo } from 'react';
import useSWR from 'swr';

// https://github.com/vercel/swr/issues/129

const abortableMiddleware = (useSWRNext) => {
  return (key, fetcher, config) => {
    const abortController = useMemo(() => new AbortController(), [key]);

    // as soon as abortController is changed or component is unmounted, call abort
    useEffect(() => {
      return () => {
        abortController.abort();
      };
    }, [abortController]);

    // pass signal to your fetcher in way you prefer
    const fetcherExtended = (url, init) => {
      return fetcher(url, { ...init, signal: abortController.signal });
    };

    return useSWRNext(key, fetcherExtended, config);
  };
};

const fetcher = (todoId, init) => {
  const url = `https://jsonplaceholder.typicode.com/posts/${todoId}`;
  return fetch(url, init).then((res) => res.json());
};

const Example6 = () => {
  const [todoId, setTodoId] = useState(1);

  const { data } = useSWR(todoId, fetcher, { use: [abortableMiddleware] });

  return (
    <section data-name="Example6">
      <h1>todoId:{todoId}</h1>
      <button className="my-btn" onClick={() => setTodoId((prev) => prev + 1)}>
        Next
      </button>
      <div className="my-code">
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </section>
  );
};
export default Example6;
