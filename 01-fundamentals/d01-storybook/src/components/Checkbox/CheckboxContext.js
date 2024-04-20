import React, { useContext } from 'react';

export const CheckboxContext = React.createContext(null);

/* interface ICheckboxContext {
  values: string[];
  setSelectValue: (value: string, isChecked: boolean) => void;
}
 */
export function useCheckboxContext() {
  return useContext(CheckboxContext);
}
