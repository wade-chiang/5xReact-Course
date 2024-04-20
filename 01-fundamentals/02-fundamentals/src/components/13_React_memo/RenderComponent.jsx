import RenderTip from '../RenderTip';

const RenderComponent = ({ count }) => {
  return (
    <section data-name="RenderComponent">
      <h1>props.count:{count}</h1>
      <RenderTip />
    </section>
  );
};

export default RenderComponent;
