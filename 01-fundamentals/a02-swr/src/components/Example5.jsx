import { useEffect, useState } from 'react';
import axios from 'axios';

const Example5 = () => {
  const [todoId, setTodoId] = useState(1);
  const [data, setData] = useState(null);

  useEffect(() => {
    const source = axios.CancelToken.source();
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${todoId}`, {
        cancelToken: source.token,
      })
      .then((res) => setData(res.data))
      .catch((error) => {
        // TODO cancel 後，一定會進到 catch，可以這樣判斷是不是 cancel 產生的 error
        if (axios.isCancel(error)) {
          console.log('Request canceled', error.message);
        } else {
          console.error(error);
        }
      });
    return () => {
      source.cancel();
    };
  }, [todoId]);

  return (
    <section data-name="Example5">
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
export default Example5;
