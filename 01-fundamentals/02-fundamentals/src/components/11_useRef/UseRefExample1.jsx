import React from 'react';

const UseRefExample1 = () => {
  // TODO
  const ref = React.useRef(0);
  return (
    <section data-name="UseRefExample1">
      <button
        className="my-btn"
        onClick={() => {
          // TODO
          ref.current += 1;
          console.log(ref.current); // 值會變化，但 Component 不會 update
        }}
      >
        increment
      </button>
      <h1>ref.current:{ref.current}</h1>
    </section>
  );
};

export default UseRefExample1;
