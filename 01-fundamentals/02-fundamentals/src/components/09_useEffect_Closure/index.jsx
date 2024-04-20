import React from 'react';
// import './closureSideEffect';

const Example = () => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prev) => {
        return prev + 1;
      });
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <section data-name="Example09">
      <h2>count:{count}</h2>
    </section>
  );
};
export default Example;
