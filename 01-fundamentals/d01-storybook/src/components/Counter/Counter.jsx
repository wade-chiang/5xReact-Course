import { useState, useCallback, memo, useEffect } from 'react';

const Counter = ({ defaultCount = 0 }) => {
  const [count, setCount] = useState(defaultCount);

  const atIncrease = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);
  const atDecrease = useCallback(() => {
    setCount((prev) => prev + -1);
  }, []);

  useEffect(() => {
    setCount(defaultCount);
  }, [defaultCount]);

  return (
    <section data-name="Counter">
      <div>
        <span data-testid="display_count">{count}</span>
      </div>
      <button className="my-btn" type="button" onClick={atIncrease}>
        Increase
      </button>
      <button className="my-btn" type="button" onClick={atDecrease}>
        Decrease
      </button>
    </section>
  );
};

export default memo(Counter);
