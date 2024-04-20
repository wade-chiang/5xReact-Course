/* eslint-disable react/jsx-no-constructed-context-values */
import { useMemo, useState, useEffect } from 'react';
import { MyContext } from './context';
import ToggleThemeButton from './ToggleThemeButton';
import MyCountButton from './MyCountButton';

const App = () => {
  const [theme, setTheme] = useState('light');
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(10);

  /* // TODO 可以使用 React.useMemo 優化
  const providerValue = useMemo(() => {
    return {
      theme,
      setTheme,
      count,
      setCount,
    };
  }, [theme, count]);
  // */
  const providerValue = {
    theme,
    setTheme,
    count,
    setCount,
  };

  return (
    <section data-name="Example2">
      <button className="my-btn" onClick={() => setCount2((prev) => prev + 1)}>
        count2:{count2}
      </button>

      <div className="my-code">
        <pre>{JSON.stringify(providerValue, null, 2)}</pre>
      </div>

      <MyContext.Provider value={providerValue}>
        <ToggleThemeButton />
        <MyCountButton />
      </MyContext.Provider>
    </section>
  );
};

export default App;
