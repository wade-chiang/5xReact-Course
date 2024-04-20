import { useCallback, useState } from 'react';
import useSWR from 'swr';
import axios from 'axios';

const fetcher = (url) => axios.get(url).then(({ data }) => data);

const Example4 = () => {
  const [fetchSwitch, setToggleFetchSwitch] = useState(false);

  // TODO
  const { data } = useSWR(
    fetchSwitch ? 'https://jsonplaceholder.typicode.com/posts/20' : null,
    fetcher,
  );

  const atToggleFetch = useCallback(() => {
    setToggleFetchSwitch((prev) => !prev);
  }, []);

  return (
    <section data-name="Example4">
      <button
        className="my-btn"
        data-active={fetchSwitch}
        onClick={atToggleFetch}
      >
        Toggle
      </button>
      <div className="my-code">
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </section>
  );
};
export default Example4;
