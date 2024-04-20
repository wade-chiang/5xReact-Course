import * as React from 'react';

// TODO2
const MyComponent = React.forwardRef((props, ref) => {
  return (
    <section data-name="MyComponent">
      <h1 className="my-component__h1" ref={ref}>
        MyComponent
      </h1>
    </section>
  );
});

const Example1ForwardRef = () => {
  /**
   * @type {React.MutableRefObject<HTMLElement>}
   */
  const ref = React.useRef(null);

  React.useEffect(() => {
    console.log(ref.current);
  }, []);
  return (
    <section data-name="Example1ForwardRef">
      {/* TODO1 */}
      <h1
        ref={(ele) => {
          console.log(ele);
        }}
      >
        hi,9527
      </h1>
      {/* TODO2 */}
      <MyComponent ref={ref} />
    </section>
  );
};
export default Example1ForwardRef;
