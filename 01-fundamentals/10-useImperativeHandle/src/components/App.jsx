import Example1forwardRef from './Example1forwardRef';
import Example2useImperativeHandle from './Example2useImperativeHandle';
import Example3 from './Example3';
import Example4 from './Example4';

const App = () => {
  return (
    <div className="app">
      <Example1forwardRef />
      <Example2useImperativeHandle />
      <Example3 />
      <Example4 />
    </div>
  );
};

export default App;
