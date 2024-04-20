import { useSelector, useDispatch } from 'react-redux';
import { actionIncrease, actionDecrease } from '../actions';
import RenderTip from './RenderTip';

const MyCountButton = () => {
  // TODO
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const atIncrease = () => {
    dispatch(actionIncrease());
  };
  const atDecrease = () => {
    dispatch(actionDecrease());
  };
  return (
    <section data-name="MyCountButton">
      <RenderTip />
      <h3>Count: {count}</h3>
      <button className="my-btn mr-2" onClick={atIncrease}>
        +
      </button>
      <button className="my-btn" onClick={atDecrease}>
        -
      </button>
    </section>
  );
};
export default MyCountButton;
