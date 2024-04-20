/*
type LineItemProps = LineItemType & {
  onQuantityChange: (id: string) => void,
};
*/
const LineItem = (props) => {
  const { id, name, price, quantity, onQuantityChange } = props;
  return (
    <section data-name="LineItem">
      <h3>
        {name},{price},{quantity}
      </h3>
      <button
        className="my-btn"
        onClick={() => {
          onQuantityChange(id);
        }}
      >
        +1
      </button>
    </section>
  );
};

export default LineItem;
