import React, { useRef, useEffect } from 'react';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

// https://flatpickr.js.org/
/**
 * @typedef Props
 * @prop {string | Date} value
 * @prop {(selectedDate:string) => void} onChange
 */

/**
 * @param {Props} props
 */
const FlatPickrComponent = (props) => {
  const { onChange, value } = props;

  const onChangeRef = useRef();
  onChangeRef.current = onChange;

  const inputRef = useRef(null);
  const fpRef = useRef(null);

  useEffect(() => {
    fpRef.current = flatpickr(inputRef.current, {
      onChange(selectedDates) {
        onChangeRef.current?.(selectedDates[0]);
      },
    });
    const fpRefInstance = fpRef.current;
    return () => {
      fpRefInstance?.destroy();
    };
  }, []);

  useEffect(() => {
    if (value) {
      fpRef.current?.setDate(value);
    } else {
      fpRef.current?.clear();
    }
  }, [value]);
  return (
    <div>
      <input type="text" ref={inputRef} className="my-input" />
    </div>
  );
};

export default React.memo(FlatPickrComponent);
