import React from 'react';

const UseEffect04Cleanup = () => {
  const [count, setCount] = React.useState(0);
  // TODO
  React.useEffect(() => {
    console.log('effect count', count);
    return () => {
      console.log('cleanup count', count);
    };
  }, [count]);

  return (
    <section data-name="UseEffect04Cleanup">
      <h2>count:{count}</h2>
      <button className="my-btn" onClick={() => setCount(count + 1)}>
        addCount
      </button>
    </section>
  );
};

export default UseEffect04Cleanup;
