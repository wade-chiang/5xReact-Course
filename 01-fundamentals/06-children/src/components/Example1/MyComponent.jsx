import React from 'react';

/**
 * @typedef Props
 * @prop { React.ReactNode | ((name: string) => React.JSX.Element)} [children]
 */
/**
 * @param {Props} props
 */
const MyComponent = (props) => {
  const { children } = props;
  const [name, setName] = React.useState('milkmidi');

  let child = children;
  if (typeof children === 'function') {
    child = children(name);
  }

  return (
    <section data-name="MyComponent">
      <h1>{name}</h1>
      <button className="my-btn" onClick={() => setName('hi, react')}>
        setName
      </button>
      <section data-name="children" data-stripes>
        {child}
      </section>
    </section>
  );
};
export default MyComponent;
