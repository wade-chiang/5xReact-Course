import React from 'react';

function appendStyle(css) {
  const head = document.getElementsByTagName('head')[0];
  const s = document.createElement('style');
  s.setAttribute('type', 'text/css');
  s.appendChild(document.createTextNode(css));
  head.appendChild(s);
}

const Example = () => {
  const domRef = React.useRef();
  // https://reactjs.org/blog/2022/03/29/react-v18.html#useinsertioneffect
  React.useInsertionEffect(() => {
    console.log('01 - useInsertionEffect', domRef.current); // undefined
    // ... inject <style> tags here ...
    appendStyle(`
      .my-style {
        background: black;
        color: white;
      }
    `);
  }, []);
  React.useLayoutEffect(() => {
    console.log('02 - useLayoutEffect', domRef.current);
  }, []);
  React.useEffect(() => {
    console.log('03 - useEffect', domRef.current);
  }, []);
  return (
    <section data-name="Example1useInsertionEffect" ref={domRef}>
      <h1 className="my-style">useInsertionEffect</h1>
    </section>
  );
};

export default Example;
