// https://zh-hant.reactjs.org/docs/hooks-reference.html#usereducer
import { useReducer } from 'react';

// TODO 1
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const initialState = { count: 0 };

const OfficialReducerExample = () => {
  // TODO 2
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <section data-name="Example0 - OfficialReducerExample">
      <h1>Count: {state.count}</h1>
      {/* TODO 3 */}
      <button
        className="my-btn"
        onClick={() => dispatch({ type: 'increment' })}
      >
        increment
      </button>
      <button
        className="my-btn"
        onClick={() => dispatch({ type: 'decrement' })}
      >
        decrement
      </button>

      {/* FIXME implement reset */}
      <button className="my-btn">reset</button>
      {/* FIXME implement slider */}
      <div className="w-50 my-2">
        <input type="range" className="my-range" min={0} max={100} step={5} />
      </div>
    </section>
  );
};
export default OfficialReducerExample;
