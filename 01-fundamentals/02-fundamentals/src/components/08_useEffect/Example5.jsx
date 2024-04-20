import React from 'react';

const UseEffect05Cleanup = () => {
  const [enabled, setEnabled] = React.useState(true);
  // TODO
  React.useEffect(() => {
    let timeId;
    if (enabled) {
      timeId = setInterval(() => {
        console.log('setInterval');
      }, 1000);
    }
    return () => {
      clearInterval(timeId);
    };
  }, [enabled]);

  return (
    <section data-name="UseEffect05Cleanup">
      <button className="my-btn" onClick={() => setEnabled(!enabled)}>
        Toggle enabled
      </button>
    </section>
  );
};

export default UseEffect05Cleanup;
