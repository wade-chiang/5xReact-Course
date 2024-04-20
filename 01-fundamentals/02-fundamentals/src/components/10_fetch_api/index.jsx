import { useEffect, useState } from 'react';

const FetchAPIExample = () => {
  const [data, setData] = useState([]);

  // TODO
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }, []);
  console.log(`data: ${Object.entries(data)})`);
  return (
    <section data-name="Example10">
      {data.map((item) => {
        return (
          <div key={item.id} className="border">
            <p>{item.title}</p>
            <small>{item.id}</small>
          </div>
        );
      })}
    </section>
  );
};

export default FetchAPIExample;
