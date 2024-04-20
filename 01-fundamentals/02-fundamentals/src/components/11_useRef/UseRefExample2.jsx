import React from 'react';

const UseRefExample2 = () => {
  // TODO
  /**
   * @type {React.MutableRefObject<HTMLInputElement>}
   */
  const domRef = React.useRef(null);

  return (
    <section data-name="UseRefExample2">
      <button
        className="button"
        onClick={() => {
          // TODO
          domRef.current.focus();
        }}
      >
        input focus
      </button>
      <div>
        {/* TODO */}
        <input className="my-input" ref={domRef} />
      </div>
    </section>
  );
};

export default UseRefExample2;
