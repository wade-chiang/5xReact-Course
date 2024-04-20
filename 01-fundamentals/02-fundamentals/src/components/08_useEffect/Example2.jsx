import React from 'react';

const Example2ComponentUpdate = () => {
  const [count, setCount] = React.useState(0);

  // TODO
  React.useEffect(() => {
    document.title = `You clicked ${count} times`;
    console.log('useEffect, count', count);
  });

  return (
    <section data-name="Example2">
      <h2>count:{count}</h2>
      <button className="my-btn" onClick={() => setCount(count + 1)}>
        addCount
      </button>
    </section>
  );
};

export default Example2ComponentUpdate;
