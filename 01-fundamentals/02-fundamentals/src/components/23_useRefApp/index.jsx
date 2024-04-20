import { useRef, useState, useEffect } from 'react';
import './app.scss';

const Example = () => {
  const [password, setPassword] = useState(() => new Array(6).fill(''));
  const [isComplete, setIsComplete] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const inputRef = useRef([]);
  const atInputChange = (e) => {
    const { target } = e;
    const { value, dataset } = target;
    const index = +dataset.index;
    setPassword((prev) => {
      const newArr = prev.concat();
      newArr[index] = value;
      return newArr;
    });
    setCurrentIndex(index + 1);
  };
  useEffect(() => {
    const nextInputDOM = inputRef.current[currentIndex];
    if (nextInputDOM) {
      nextInputDOM.focus();
    } else {
      inputRef.current[inputRef.current.length - 1].blur();
      setIsComplete(true);
    }
  }, [currentIndex]);

  return (
    <section data-name="Example23">
      <div className="flex">
        {password.map((v, index) => {
          return (
            <input
              className="input"
              type="text"
              ref={(ele) => {
                inputRef.current[index] = ele;
              }}
              key={index}
              value={v}
              data-index={index}
              onChange={atInputChange}
            />
          );
        })}
      </div>
      {isComplete && <h1>{password}</h1>}
    </section>
  );
};

export default Example;
