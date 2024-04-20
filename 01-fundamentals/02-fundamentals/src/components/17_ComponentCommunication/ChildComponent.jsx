/* type ChildComponentProps = {
  count: number,
  onCallParent: (value: string) => void,
}; */
const ChildComponent = (props) => {
  // TODO
  const { onCallParent, count } = props;
  const atClick = () => {
    // TODO
    onCallParent(new Date().toISOString());
  };
  return (
    <section data-name="ChildComponent" data-stripes>
      <h3>props.count:{count}</h3>
      <button className="my-btn" onClick={atClick}>
        call Parent
      </button>
    </section>
  );
};

export default ChildComponent;
