import { useSelector } from 'react-redux';
import RenderTip from './RenderTip';

const MyCount = () => {
  // TODO
  const count = useSelector((state) => state.count);
  return (
    <section data-name="MyCount">
      <RenderTip />
      <h3>Count: {count}</h3>
    </section>
  );
};

export default MyCount;
