import { useState } from 'react';
import useAutoCounter from '../hooks/useAutoCounter';
import HelloWorld from './HelloWorld';
import Quantity from './Quantity';
import Counter from './Counter';

const App = () => {
  const [quantity, setQuantity] = useState(0);
  const { count, onStop } = useAutoCounter();
  return (
    <div className="app container">
      <section data-name="useAutoCounter">
        <div>
          <h1>auto count:{count}</h1>
          <button className="my-btn" onClick={onStop}>
            onStop
          </button>
        </div>
      </section>
      <HelloWorld />
      <Counter />
      <Quantity value={quantity} maxValue={5} onChange={setQuantity} />
    </div>
  );
};

export default App;
