// https://reactjs.org/docs/hooks-reference.html#usecallback
// https://zh-hant.reactjs.org/docs/hooks-reference.html#usecallback

import { useState, useCallback, memo, useMemo } from 'react';
import RenderTip from '@/components/RenderTip';

// TODO
const MemoComponent = memo(({ onClick }) => {
  return (
    <section data-name="MemoComponent">
      <RenderTip />
      <button className="button" onClick={onClick}>
        call props.onClick
      </button>
    </section>
  );
});

const Example = () => {
  const [count, setCount] = useState(10);
  const atAssignCallback = () => {
    setCount((prev) => prev + 1);
  };

  // useCallback will return a memoized version of the callback that only changes if one of the dependencies has changed
  const atMemoizedCallback = useCallback(() => {
    // setCount(count + 1); // wrong
    setCount((prev) => prev + 1); // correct
  }, []); // dependencies 有更新時，才建立新的 function

  // 以下等價上方的 atMemoizedCallback
  const atMemoizedCallbackEqualUseMemo = useMemo(() => {
    return () => {
      setCount((prev) => prev + 1);
    };
  }, []);
  return (
    <section data-name="Example15">
      <h1>count:{count}</h1>
      <button className="my-btn" onClick={() => setCount(count + 1)}>
        increment
      </button>
      <MemoComponent onClick={atAssignCallback} />
      <MemoComponent onClick={atMemoizedCallback} />
      <MemoComponent onClick={atMemoizedCallbackEqualUseMemo} />
    </section>
  );
};

export default Example;
