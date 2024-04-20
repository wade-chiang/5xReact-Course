import { useState, memo } from 'react';

const Counter = ({ defaultCount = 0 }) => {
  const [count, setCount] = useState(defaultCount);

  const atDecrease = () => setCount((prev) => prev + -1);
  const atIncrease = () => setCount((prev) => prev + 1);

  return (
    <section data-name="Counter">
      <div data-testid="display_count">{count}</div>
      <button className="my-btn" onClick={atDecrease}>
        Decrease
      </button>
      <button className="my-btn" onClick={atIncrease}>
        Increase
      </button>
    </section>
  );
};

export default memo(Counter);
