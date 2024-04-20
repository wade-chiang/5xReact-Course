import React, { useContext } from 'react';

// TODO
export const MyContext = React.createContext(null);

// TODO
export function useMyContext() {
  const ctx = useContext(MyContext);
  if (ctx == null) {
    throw new Error('useMyContext must be used inside a ContextProvider.');
  }
  return ctx;
}
