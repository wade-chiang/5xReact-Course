/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useContext, useState } from 'react';

// TODO
const MyContext = React.createContext({ hello: '我是預設值' });

const ChildOne = () => {
  // TODO
  const data = useContext(MyContext);
  return (
    <section data-name="ChildOne">
      <div className="my-code">
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </section>
  );
};

const Example1 = () => {
  const [count, setCount] = useState(0);
  const providerValue = {
    count,
    hello: 'Hello world',
  };
  return (
    <section data-name="Example1">
      <button className="my-btn" onClick={() => setCount((prev) => prev + 1)}>
        increment
      </button>
      <ChildOne />
      {/* TODO */}
      <MyContext.Provider value={providerValue}>
        <ChildOne />
      </MyContext.Provider>
    </section>
  );
};

export default Example1;
