import { memo } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import RenderTip from '@/components/RenderTip';

const AllContainer = () => {
  const { loading, count } = useSelector((state) => {
    return {
      count: state.count,
      loading: state.common.loading,
    };
  }, shallowEqual);

  const dispatch = useDispatch();

  const atUpdateLoading = () => {
    dispatch({ type: 'loading', payload: true });
    window.setTimeout(() => {
      dispatch({ type: 'loading', payload: false });
    }, 1000);
  };

  return (
    <section data-name="AllContainer">
      <RenderTip />
      <h1>count:{count}</h1>
      <h1>loading:{`${loading}`}</h1>
      <button className="my-btn" onClick={atUpdateLoading}>
        setLoading
      </button>
    </section>
  );
};

export default memo(AllContainer);
