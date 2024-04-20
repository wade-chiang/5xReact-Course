import { useState, useCallback } from 'react';

const Example = () => {
  // GOOD
  const [height, setHeight] = useState(0);
  const domRef = useCallback((node) => {
    setHeight(node.clientHeight);
  }, []);

  return (
    <section data-name="Example1 - Good" className="style-green">
      {/* TODO */}
      <h1 ref={domRef}>h1</h1>
      <h1>height:{height}</h1>
    </section>
  );
};

export default Example;
