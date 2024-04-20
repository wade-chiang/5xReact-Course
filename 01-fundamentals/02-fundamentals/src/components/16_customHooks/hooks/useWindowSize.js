import { useState } from 'react';

// FIXME: please implement this useWindowSize custom hook
const useWindowSize = () => {
  const [size, setSize] = useState({ width: 0, height: 0 });
  return size;
};

export default useWindowSize;
