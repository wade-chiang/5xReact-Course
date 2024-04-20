import React from 'react';

const Example4 = () => {
  const [isGreen, setGreen] = React.useState(false);
  const atClick = () => {
    setGreen(!isGreen);
  };
  return (
    <section data-name="Example4">
      <button className="my-btn" onClick={atClick}>
        isGreen
      </button>
      {/* TODO */}
      <div className="box" data-green={isGreen} />
    </section>
  );
};

export default Example4;
