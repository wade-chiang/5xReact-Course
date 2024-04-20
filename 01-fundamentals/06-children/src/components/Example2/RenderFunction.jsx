import React from 'react';

/**
 * @typedef Props
 * @prop {(name: string) => React.JSX.Element} [render]
 * @prop {(name: string) => React.JSX.Element} [renderFooter]
 */
/**
 * @param {Props} props
 */
const Example2RenderFunction = (props) => {
  const { render, renderFooter } = props;
  const [name, setName] = React.useState('milkmidi');

  return (
    <section data-name="Example2RenderFunction">
      <h1>{name}</h1>
      <button className="my-btn" onClick={() => setName('hi,React')}>
        click
      </button>
      <section data-stripes data-name="body">
        {render(name)}
      </section>
      <section data-stripes data-name="footer">
        {renderFooter(name)}
      </section>
    </section>
  );
};

export default Example2RenderFunction;
