const LineItem = (props) => {
  const { id, title, price, quantity, onQuantityChange } = props;
  return (
    <section data-name="LineItem">
      <h3>title:{title}</h3>
      <h3>price:{price}</h3>
      <h3>quantity:{quantity}</h3>
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
