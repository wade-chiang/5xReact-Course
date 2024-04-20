import React from 'react';

const UseRefExample4 = () => {
  const [show, setShow] = React.useState(false);
  /**
   * @type {React.MutableRefObject<HTMLInputElement>}
   */
  const refInput = React.useRef();

  const atShowClick = () => {
    setShow(!show);
    console.log(show); // false why ?
    console.log(refInput.current); // FIXME: undefined
  };

  React.useEffect(() => {
    if (show) {
      // [x]: Correct
      // console.log(refInput.current); // correct
      refInput.current.focus();
    }
  }, [show]);

  return (
    <section data-name="UseRefExample4">
      <button className="my-btn d-block" onClick={atShowClick}>
        show input
      </button>
      {show && <input className="my-input" ref={refInput} />}
    </section>
  );
};

export default UseRefExample4;
