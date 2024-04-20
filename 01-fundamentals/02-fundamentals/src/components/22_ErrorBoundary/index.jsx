import { useState } from 'react';
import ErrorBoundary from './ErrorBoundary';

const Inner = () => {
  const [count, setCount] = useState(0);
  if (count === 5) {
    throw new Error('Hi, Error');
  }
  return (
    <button
      className="my-btn"
      onClick={() => {
        setCount((prev) => prev + 1);
      }}
    >
      setCount{count}
    </button>
  );
};

const ErrorBoundaryExample = () => {
  return (
    <section data-name="ErrorBoundaryExample">
      <ErrorBoundary>
        <Inner />
      </ErrorBoundary>
    </section>
  );
};

export default ErrorBoundaryExample;
