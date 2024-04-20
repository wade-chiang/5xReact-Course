import useWindowWidth from './useWindowWidth';
import useWindowWidthSyncExternalStore from './useWindowWidthSyncExternalStore';

const Example = () => {
  const windowWidth = useWindowWidth();
  const windowWidth2 = useWindowWidthSyncExternalStore();
  return (
    <section data-name="Example1">
      <h1>window width</h1>
      <h3>{windowWidth}</h3>
      <h3>{windowWidth2}</h3>
    </section>
  );
};

export default Example;
