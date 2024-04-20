import { memo, useState } from 'react';
import RenderComponent from './RenderComponent';

// https://zh-hant.reactjs.org/docs/react-api.html#reactmemo
// https://github.com/facebook/react/blob/master/packages/shared/shallowEqual.js
// TODO1
const RenderComponentMemo = memo(RenderComponent);

// TODO2 ----------------------------------- {
function areEqual(prevProps, nextProps) {
  // console.log(prevProps);
  // console.log(nextProps);
  return prevProps.count === nextProps.count;
}
const RenderComponentMemoWithCustomCompare = memo(RenderComponent, areEqual);
// TODO2 ----------------------------------- }

const ReactMemoExample = () => {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);
  return (
    <section data-name="Example13">
      <h1>count:{count}</h1>
      <button className="my-btn" onClick={() => setCount(count + 1)}>
        count
      </button>
      <hr />
      <h1>show:{`${show}`}</h1>
      <button
        className="my-btn"
        data-active={show}
        onClick={() => setShow(!show)}
      >
        toggle show
      </button>
      <RenderComponent count={count} />
      <RenderComponentMemo count={count} />
      <RenderComponentMemoWithCustomCompare count={count} />
    </section>
  );
};

export default ReactMemoExample;
