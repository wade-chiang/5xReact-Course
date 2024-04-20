import useWindowSize from './hooks/useWindowSize';

// FIXME
const Example3 = () => {
  const size = useWindowSize();
  return (
    <section data-name="Example3">
      <pre>{JSON.stringify(size, null, 2)}</pre>
    </section>
  );
};

export default Example3;
