import React, { useEffect, useState, useRef } from 'react';

// https://dev.to/jser_zanp/how-does-useimperativehandle-work-react-source-code-walkthrough-jjd
// mountImperativeHandle
// https://github.com/facebook/react/blob/4729ff6d1f191902897927ff4ecd3d1f390177fa/packages/react-reconciler/src/ReactFiberHooks.new.js#L1799-L1835
// updateImperativeHandle
// https://github.com/facebook/react/blob/4729ff6d1f191902897927ff4ecd3d1f390177fa/packages/react-reconciler/src/ReactFiberHooks.new.js#L1837-L1862
// imperativeHandleEffect 這裡可以看出等價於下方 useEffect 的寫法
// https://github.com/facebook/react/blob/4729ff6d1f191902897927ff4ecd3d1f390177fa/packages/react-reconciler/src/ReactFiberHooks.new.js#L1769-L1797
const MyInput = React.forwardRef((props, ref) => {
  const [input, setInput] = useState('React');
  //* // TODO
  React.useImperativeHandle(
    ref,
    () => {
      return {
        getCustomText() {
          return input;
        },
      };
    },
    [input],
  );
  // */

  /* // 等價於上方 useImperativeHandle 寫法
  React.useEffect(() => {
    ref.current = {
      getCustomText: () => input,
    };
    return () => {
      ref.current = null;
    };
  }, [input, ref]);
  // */

  return (
    <section data-name="MyInput">
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
    </section>
  );
});

const Example2useImperativeHandle = () => {
  const [name, setName] = useState('');
  const inputRef = useRef(null);

  const atShowInputClick = () => {
    // TODO
    setName(inputRef.current.getCustomText());
  };
  useEffect(() => {
    console.log(inputRef.current);
  }, []);

  return (
    <section data-name="Example2useImperativeHandle">
      <h1>MyInput getCustomText():{name}</h1>
      <button onClick={atShowInputClick} className="my-btn">
        getCustomText
      </button>
      {/* TODO */}
      <MyInput ref={inputRef} />
    </section>
  );
};
export default Example2useImperativeHandle;
