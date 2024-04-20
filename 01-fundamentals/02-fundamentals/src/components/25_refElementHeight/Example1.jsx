import { useState, useRef, useEffect } from 'react';

const Example = () => {
  // BAD
  const [height, setHeight] = useState(0);
  const domRef = useRef(null);
  useEffect(() => {
    setHeight(domRef.current.clientHeight);
  }, []);

  return (
    <section data-name="Example1 - Bad" className="style-red">
      {/* TODO */}
      <h1 ref={domRef}>h1</h1>
      <h1>height:{height}</h1>
    </section>
  );
};

export default Example;
