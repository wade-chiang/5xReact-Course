import useWindowSizeError from './useWindowSizeError';
import useWindowSizeCorrect from './useWindowSizeCorrect';

const Example = () => {
  /*
    useWindowSizeError 是要 Demo 錯誤的用法 加了就會 crash
  */
  // const size = useWindowSizeError(); // Error
  const size = useWindowSizeCorrect(); // Correct
  return (
    <section data-name="Example6">
      <div className="my-code">
        <pre>{JSON.stringify(size, null, 2)}</pre>
      </div>
    </section>
  );
};

export default Example;
