import React from 'react';

const Example = () => {
  // https://reactjs.org/blog/2022/03/29/react-v18.html#useid
  const id1 = React.useId();
  const id2 = React.useId();

  return (
    <section data-name="Example0useId">
      <div className="d-flex">
        <input className="my-checkbox" type="checkbox" id={id1} />
        <label htmlFor={id1}>React</label>
      </div>
      <div className="d-flex">
        <input className="my-checkbox" type="checkbox" id={id2} />
        <label htmlFor={id2}>Vue</label>
      </div>
    </section>
  );
};

export default Example;
