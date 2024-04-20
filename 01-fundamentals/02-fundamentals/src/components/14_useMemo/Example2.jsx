import React from 'react';
import RenderTip from '../RenderTip';

const InnerComponent = React.memo((props) => {
  const { data, color, name } = props;
  return (
    <section data-name={name} className={`style-${color}`}>
      <RenderTip />
      <ul>
        {data.map((value) => {
          return <li key={value}>{value}</li>;
        })}
      </ul>
    </section>
  );
});

const UseMemoExample2 = () => {
  const [count, setCount] = React.useState(0);
  const [data, setData] = React.useState([0, 1, 2, 3]);

  // FIXME: Bad
  const oddData = data.filter((value) => value % 2 === 1);
  // CORRECT
  const evenData = React.useMemo(() => {
    return data.filter((value) => value % 2 === 0);
  }, [data]);

  return (
    <section data-name="UseMemoExample2">
      <h1>count:{count}</h1>
      <button className="my-btn" onClick={() => setCount((prev) => prev + 1)}>
        increment
      </button>
      <InnerComponent data={oddData} color="red" name="odd" />
      <InnerComponent data={evenData} color="green" name="even(useMemo)" />
    </section>
  );
};
export default UseMemoExample2;
