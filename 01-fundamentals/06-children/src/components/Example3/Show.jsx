const Show = (props) => {
  const { when, children } = props;
  return when ? children : null;
};

export default Show;
