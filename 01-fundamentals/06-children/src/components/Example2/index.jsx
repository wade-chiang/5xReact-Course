import RenderFunction from './RenderFunction';

const Example2 = () => {
  return (
    <section data-name="Example2">
      <RenderFunction
        render={(name) => <h1>{name}</h1>}
        renderFooter={(name) => <h1>{name}</h1>}
      />
    </section>
  );
};

export default Example2;
