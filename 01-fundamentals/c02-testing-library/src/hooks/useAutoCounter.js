import { useState, useCallback, useEffect } from 'react';

/* type UseCounter = {
  count: number,
  onStart: () => void,
  onStop: () => void,
  onReset: () => void,
}; */

export default function useAutoCounter() {
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let timeId;
    if (isActive) {
      timeId = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      clearInterval(timeId);
    };
  }, [isActive]);

  const onStart = useCallback(() => setIsActive(true), []);
  const onStop = useCallback(() => setIsActive(false), []);
  const onReset = useCallback(() => setCount(0), []);

  return { count, onStart, onStop, onReset };
}
