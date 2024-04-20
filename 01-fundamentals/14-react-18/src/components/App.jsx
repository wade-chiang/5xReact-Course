import Example0useId from './Example0useId';
import Example1useInsertion from './Example1useInsertionEffect';
import Example2useDeferredValue from './Example2useDeferredValue';
import Example3useTransition from './Example3useTransition';
import Example4useTransition from './Example4useTransition';
import Example5Suspense from './Example5Suspense';

const App = () => {
  return (
    <div className="app">
      <Example0useId />
      <Example1useInsertion />
      <Example2useDeferredValue />
      <Example3useTransition />
      <Example4useTransition />
      <Example5Suspense />
    </div>
  );
};

export default App;
